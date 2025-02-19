package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Event struct {
	ID       primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	Tournament string           `json:"tournament"`
	Name     string             `json:"name"`
	TeamA    string             `json:"team_a"`
	TeamB    string             `json:"team_b"`
	DateTime string             `json:"date_time"`
	Score    string             `json:"score"`
	Status   string             `json:"status"` // "upcoming" или "completed"
	
}
