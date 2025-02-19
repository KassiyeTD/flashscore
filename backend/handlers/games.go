package handlers

import (
	"context"
	"encoding/json"
	"net/http"
	"time"
	"flashscore-backend/database"
	"flashscore-backend/models"
    "go.mongodb.org/mongo-driver/mongo"
	"github.com/gorilla/mux"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var gameCollection *mongo.Collection

//  Инициализация обработчиков матчей
func InitGameHandlers() {
	gameCollection = database.GetCollection("games")
}

// Получение информации о матче (GET /games/{id}/statistics)
func GetGameStatistics(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")

    params := mux.Vars(r)

    gameID, err := primitive.ObjectIDFromHex(params["id"])
    if err != nil {
        http.Error(w, "Неверный формат ID", http.StatusBadRequest)
        return
    }

    ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
    defer cancel()

    var game models.Game
    err = gameCollection.FindOne(ctx, bson.M{"_id": gameID}).Decode(&game) 
    if err != nil {
        http.Error(w, "Матч не найден", http.StatusNotFound)
        return
    }

    json.NewEncoder(w).Encode(game)
}



// Получение состава команд (GET /games/{id}/lineup)
func GetGameLineup(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	params := mux.Vars(r)
	gameID, err := primitive.ObjectIDFromHex(params["id"]) 
	if err != nil {
		http.Error(w, "Неверный формат ID", http.StatusBadRequest)
		return
	}

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	var lineup models.GameLineup
	err = gameCollection.FindOne(ctx, bson.M{"game_id": gameID}).Decode(&lineup)
	if err != nil {
		http.Error(w, "Состав не найден", http.StatusNotFound)
		return
	}

	json.NewEncoder(w).Encode(lineup)
}

// Лайкнуть матч (POST /games/{id}/likes)
func LikeGame(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	params := mux.Vars(r)
	gameID, err := primitive.ObjectIDFromHex(params["id"])
	if err != nil {
		http.Error(w, "Неверный формат ID", http.StatusBadRequest)
		return
	}

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	_, err = gameCollection.UpdateOne(ctx, bson.M{"_id": gameID}, bson.M{"$inc": bson.M{"likes": 1}})
	if err != nil {
		http.Error(w, "Ошибка при лайке", http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(map[string]string{"message": "Матч лайкнут"})
}

// Получение популярных матчей (GET /games/popular)
func GetPopularGames(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	cursor, err := gameCollection.Find(ctx, bson.M{}, options.Find()) 
	if err != nil {
		http.Error(w, "Ошибка получения популярных матчей", http.StatusInternalServerError)
		return
	}
	defer cursor.Close(ctx)

	var games []models.Game
	if err := cursor.All(ctx, &games); err != nil {
		http.Error(w, "Ошибка обработки данных", http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(games)
}


