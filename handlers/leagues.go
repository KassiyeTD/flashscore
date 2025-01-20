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

// GetTopLeagues returns the top 5 leagues
func GetTopLeagues(w http.ResponseWriter, r *http.Request) {
	topLeagues := []string{"La Liga", "Premier League", "Bundesliga", "Ligue 1", "Serie A"}
	json.NewEncoder(w).Encode(topLeagues)
}

// GetLeagueMatches returns matches for a specific league
func GetLeagueMatches(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	leagueID := params["id"]

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	var matches []models.Match
	cursor, err := database.Client.Database("flashscore").Collection("matches").Find(ctx, bson.M{"league_id": leagueID})
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer cursor.Close(ctx)

	for cursor.Next(ctx) {
		var match models.Match
		if err := cursor.Decode(&match); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		matches = append(matches, match)
	}

	json.NewEncoder(w).Encode(matches)
}

// GetLeagueTable returns the standings for a league
func GetLeagueTable(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	leagueID := params["id"]

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	var standings []models.LeagueTable
	cursor, err := database.Client.Database("flashscore").Collection("league_tables").Find(ctx, bson.M{"league_id": leagueID})
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	defer cursor.Close(ctx)

	for cursor.Next(ctx) {
		var table models.LeagueTable
		if err := cursor.Decode(&table); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
		standings = append(standings, table)
	}

	json.NewEncoder(w).Encode(standings)
}

