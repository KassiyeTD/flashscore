package handlers

import (
	"context"
	"encoding/json"
	"net/http"
	"time"
	"flashscore-backend/database"
	"flashscore-backend/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

var eventCollection *mongo.Collection

//  Инициализация обработчиков событий
func InitEventHandlers() {
	eventCollection = database.GetCollection("events")
}

// Получение всех событий (GET /events)
func GetEvents(w http.ResponseWriter, r *http.Request) {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	cursor, err := eventCollection.Find(ctx, bson.M{})
	if err != nil {
		http.Error(w, "Ошибка получения событий", http.StatusInternalServerError)
		return
	}
	defer cursor.Close(ctx)

	var events []models.Event
	if err := cursor.All(ctx, &events); err != nil {
		http.Error(w, "Ошибка обработки данных", http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(events)
}

// Создание события (POST /events)
func CreateEvent(w http.ResponseWriter, r *http.Request) {
	var event models.Event
	if err := json.NewDecoder(r.Body).Decode(&event); err != nil {
		http.Error(w, "Некорректный JSON", http.StatusBadRequest)
		return
	}

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	_, err := eventCollection.InsertOne(ctx, event)
	if err != nil {
		http.Error(w, "Ошибка создания события", http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusCreated)
	json.NewEncoder(w).Encode(map[string]string{"message": "Событие создано"})
}







