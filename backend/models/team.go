package models

import "go.mongodb.org/mongo-driver/bson/primitive"

// Player represents a football player
type Player struct {
	ID       primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	Name     string             `json:"name"`
	TeamID   string             `json:"team_id"`
	Position string             `json:"position"`
	Age      int                `json:"age"`
}

// NewsArticle represents news related to a football team
type NewsArticle struct {
	ID      primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	TeamID  string             `json:"team_id"`
	Title   string             `json:"title"`
	Content string             `json:"content"`
	Date    string             `json:"date"`
}

// Team represents a football club
type Team struct {
	ID      string   `bson:"_id,omitempty" json:"id"`
	Name    string   `json:"name"`
	Country string   `json:"country"`
	Players []string `json:"players"`
}


