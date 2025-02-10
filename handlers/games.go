package handlers

import (
	"context"
	"encoding/json"
	"net/http"
	"flashscore-backend/database"
	"github.com/gorilla/mux"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// InitGameHandlers initializes the MongoDB collection for games
func InitGameHandlers() {
	database.GetCollection("games")  // Ensure connection to the 'games' collection
}

// GetGameStatistics returns statistics for a specific game by ID
func GetGameStatistics(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	gameID := params["id"]

	collection := database.GetCollection("games")
	ctx := context.Background()

	var game bson.M
	err := collection.FindOne(ctx, bson.M{"_id": gameID}).Decode(&game)
	if err != nil {
		http.Error(w, "Game statistics not found", http.StatusNotFound)
		return
	}

	if stats, ok := game["statistics"]; ok {
		json.NewEncoder(w).Encode(stats)
	} else {
		http.Error(w, "No statistics available for this game", http.StatusNotFound)
	}
}

// GetGameLineup returns the lineup for a specific game by ID
func GetGameLineup(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	gameID := params["id"]

	collection := database.GetCollection("games")
	ctx := context.Background()

	var game bson.M
	err := collection.FindOne(ctx, bson.M{"_id": gameID}).Decode(&game)
	if err != nil {
		http.Error(w, "Game lineup not found", http.StatusNotFound)
		return
	}

	if lineup, ok := game["lineup"]; ok {
		json.NewEncoder(w).Encode(lineup)
	} else {
		http.Error(w, "No lineup available for this game", http.StatusNotFound)
	}
}

// LikeGame increments the like count for a specific game by ID
func LikeGame(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	gameID := params["id"]

	collection := database.GetCollection("games")
	ctx := context.Background()

	update := bson.M{"$inc": bson.M{"likes": 1}}
	result, err := collection.UpdateOne(ctx, bson.M{"_id": gameID}, update)
	if err != nil || result.MatchedCount == 0 {
		http.Error(w, "Unable to like the game", http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Game liked successfully"))
}

// GetPopularGames returns a list of games sorted by the number of likes
func GetPopularGames(w http.ResponseWriter, r *http.Request) {
	collection := database.GetCollection("games")
	ctx := context.Background()

	cursor, err := collection.Find(ctx, bson.M{}, options.Find().SetSort(bson.M{"likes": -1}))
	if err != nil {
		http.Error(w, "Unable to retrieve popular games", http.StatusInternalServerError)
		return
	}
	defer cursor.Close(ctx)

	var games []bson.M
	if err = cursor.All(ctx, &games); err != nil {
		http.Error(w, "Error decoding games", http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(games)
}

