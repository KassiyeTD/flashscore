package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Goal struct {
	Player string `json:"player"`
	Team   string `json:"team"`
	Minute int    `json:"minute"`
}

type Game struct {
	ID         primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	Tournament string             `json:"tournament"`
	Season     string             `json:"season"`
	Stage      string             `json:"stage"`
	Date       string             `json:"date"`
	HomeTeam   string             `bson:"teama" json:"home_team"` 
	AwayTeam   string             `bson:"teamb" json:"away_team"` 
	Score      string             `json:"score"`
	Goals      []Goal             `json:"goals"`
	Status     string             `json:"status"`
}

type GameLineup struct {
	GameID       primitive.ObjectID `bson:"game_id" json:"game_id"`
	HomeLineup   []string           `json:"home_lineup"`
	AwayLineup   []string           `json:"away_lineup"`
	Substitutes  []string           `json:"substitutes"`
}



