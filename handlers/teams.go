package handlers

import (
    "context"
    "encoding/json"
    "net/http"
    "github.com/gorilla/mux"
    "flashscore-backend/database"
    "go.mongodb.org/mongo-driver/bson"
)
func InitTeamHandlers() {
	database.GetCollection("teams")  
}
func GetTeams(w http.ResponseWriter, r *http.Request) {
    collection := database.GetCollection("teams")
    ctx := context.Background()
    
    cursor, err := collection.Find(ctx, bson.M{})
    if err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }
    defer cursor.Close(ctx)

    var teams []bson.M
    if err = cursor.All(ctx, &teams); err != nil {
        http.Error(w, err.Error(), http.StatusInternalServerError)
        return
    }

    json.NewEncoder(w).Encode(teams)
}

func GetTeamByID(w http.ResponseWriter, r *http.Request) {
    params := mux.Vars(r)
    collection := database.GetCollection("teams")
    ctx := context.Background()

    var team bson.M
    err := collection.FindOne(ctx, bson.M{"_id": params["id"]}).Decode(&team)
    if err != nil {
        http.Error(w, "Team not found", http.StatusNotFound)
        return
    }

    json.NewEncoder(w).Encode(team)
}
