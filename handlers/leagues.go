package handlers

import (
	"context"
	"encoding/json"
	"net/http"
	"time"
	"flashscore-backend/database"
	"flashscore-backend/models"
	"github.com/gorilla/mux"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var leagueCollection *mongo.Collection

// Инициализация обработчиков лиг
func InitLeagueHandlers() {
	leagueCollection = database.GetCollection("leagues")
}

// Получение списка всех лиг (GET /leagues)
func GetLeagues(w http.ResponseWriter, r *http.Request) {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	cursor, err := leagueCollection.Find(ctx, bson.M{}, options.Find().SetProjection(bson.M{"matches": 0, "table": 0})) 
	if err != nil {
		http.Error(w, "Ошибка получения лиг", http.StatusInternalServerError)
		return
	}
	defer cursor.Close(ctx)

	var leagues []models.League
	if err := cursor.All(ctx, &leagues); err != nil {
		http.Error(w, "Ошибка обработки данных", http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(leagues)
}


// Получение матчей определённой лиги (GET /leagues/{id}/matches)
func GetLeagueMatches(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	leagueID := params["id"]

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	var league struct {
		Matches []models.Match `bson:"matches"`
	}
	err := leagueCollection.FindOne(ctx, bson.M{"_id": leagueID}, options.FindOne().SetProjection(bson.M{"matches": 1, "_id": 0})).Decode(&league)
	if err != nil {
		http.Error(w, "Матчи не найдены", http.StatusNotFound)
		return
	}

	json.NewEncoder(w).Encode(league.Matches)
}

// Получение таблицы лиги (GET /leagues/{id}/table)
func GetLeagueTable(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	leagueID := params["id"]

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	var league struct {
		Table []models.TableTeam `bson:"table"`
	}
	err := leagueCollection.FindOne(ctx, bson.M{"_id": leagueID}, options.FindOne().SetProjection(bson.M{"table": 1, "_id": 0})).Decode(&league)
	if err != nil {
		http.Error(w, "Таблица лиги не найдена", http.StatusNotFound)
		return
	}

	json.NewEncoder(w).Encode(league.Table)
}
