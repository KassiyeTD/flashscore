package handlers
//Nurkanat-hub
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

// GetTeamInfo returns details about a specific team
func GetTeamInfo(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	teamID := params["id"]

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	var team models.Team
	err := database.Client.Database("flashscore").Collection("teams").FindOne(ctx, bson.M{"_id": teamID}).Decode(&team)
	if err != nil {
		http.Error(w, "Team not found", http.StatusNotFound)
		return
	}

	json.NewEncoder(w).Encode(team)
}

// GetTeamPlayers returns a list of players in a team
func GetTeamPlayers(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	teamID := params["id"]

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	var players []models.Player
	cursor, err := database.Client.Database("flashscore").Collection("players").Find(ctx, bson.M{"team_id": teamID})
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer cursor.Close(ctx)

	for cursor.Next(ctx) {
		var player models.Player
		if err := cursor.Decode(&player); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		players = append(players, player)
	}

	json.NewEncoder(w).Encode(players)
}

// GetTeamNews fetches recent news articles about a team
func GetTeamNews(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	teamID := params["id"]

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	var news []models.NewsArticle
	cursor, err := database.Client.Database("flashscore").Collection("team_news").Find(ctx, bson.M{"team_id": teamID})
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer cursor.Close(ctx)

	for cursor.Next(ctx) {
		var article models.NewsArticle
		if err := cursor.Decode(&article); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		news = append(news, article)
	}

	json.NewEncoder(w).Encode(news)
}

