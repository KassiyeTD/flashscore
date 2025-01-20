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
)

// GetGameStatistics returns the statistics of a specific game
func GetGameStatistics(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	gameID := params["id"]

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	var stats models.GameStatistics
	err := database.Client.Database("flashscore").Collection("game_stats").FindOne(ctx, bson.M{"game_id": gameID}).Decode(&stats)
	if err != nil {
		http.Error(w, "Game statistics not found", http.StatusNotFound)
		return
	}

	json.NewEncoder(w).Encode(stats)
}

// GetGameLineup returns the lineup of both teams in a game
func GetGameLineup(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	gameID := params["id"]

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	var lineup models.GameLineup
	err := database.Client.Database("flashscore").Collection("game_lineups").FindOne(ctx, bson.M{"game_id": gameID}).Decode(&lineup)
	if err != nil {
		http.Error(w, "Game lineup not found", http.StatusNotFound)
		return
	}

	json.NewEncoder(w).Encode(lineup)
}

// LikeGame allows users to like a game
func LikeGame(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	gameID := params["id"]

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	update := bson.M{"$inc": bson.M{"likes": 1}}
	_, err := database.Client.Database("flashscore").Collection("games").UpdateOne(ctx, bson.M{"_id": gameID}, update)
	if err != nil {
		http.Error(w, "Failed to like game", http.StatusInternalServerError)
		return
	}

	w.Write([]byte("Game liked successfully"))
}

// GetPopularGames returns the most liked games
func GetPopularGames(w http.ResponseWriter, r *http.Request) {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	var games []models.Game
	cursor, err := database.Client.Database("flashscore").Collection("games").Find(ctx, bson.M{}, nil)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer cursor.Close(ctx)

	for cursor.Next(ctx) {
		var game models.Game
		if err := cursor.Decode(&game); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		games = append(games, game)
	}

	json.NewEncoder(w).Encode(games)
}

