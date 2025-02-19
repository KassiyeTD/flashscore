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
)

var teamCollection *mongo.Collection

// Инициализация обработчиков команд
func InitTeamHandlers() {
	teamCollection = database.GetCollection("teams")
}

// Получение списка всех команд (GET /teams)
func GetTeams(w http.ResponseWriter, r *http.Request) {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	cursor, err := teamCollection.Find(ctx, bson.M{})
	if err != nil {
		http.Error(w, "Ошибка получения команд", http.StatusInternalServerError)
		return
	}
	defer cursor.Close(ctx)

	var teams []models.Team
	if err := cursor.All(ctx, &teams); err != nil {
		http.Error(w, "Ошибка обработки данных", http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(teams)
}

// Получение информации о команде по ID (GET /teams/{id})
func GetTeamByID(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	teamID := params["id"]

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	var team models.Team
	err := teamCollection.FindOne(ctx, bson.M{"_id": teamID}).Decode(&team)
	if err != nil {
		http.Error(w, "Команда не найдена", http.StatusNotFound)
		return
	}

	json.NewEncoder(w).Encode(team)
}



