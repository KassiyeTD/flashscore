package models

import "go.mongodb.org/mongo-driver/bson/primitive"

// Game represents a football game
type Game struct {
	ID           primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	HomeTeam     string             `json:"home_team"`
	AwayTeam     string             `json:"away_team"`
	Date         string             `json:"date"`
	LeagueID     string             `json:"league_id"`
	Likes        int                `json:"likes"`
}

// GameLineup represents the lineup for a match
type GameLineup struct {
	GameID       string   `bson:"game_id" json:"game_id"`
	HomeLineup   []string `json:"home_lineup"`
	AwayLineup   []string `json:"away_lineup"`
	Substitutes  []string `json:"substitutes"`
}
