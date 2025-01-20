package models

import "go.mongodb.org/mongo-driver/bson/primitive"

// LeagueTable represents the league standings
type LeagueTable struct {
	LeagueID string `bson:"league_id" json:"league_id"`
	Teams    []struct {
		Team          string `json:"team"`
		Points        int    `json:"points"`
		Played        int    `json:"played"`
		Wins          int    `json:"wins"`
		Draws         int    `json:"draws"`
		Losses        int    `json:"losses"`
		GoalsFor      int    `json:"goals_for"`
		GoalsAgainst  int    `json:"goals_against"`
		GoalDifference int   `json:"goal_difference"`
	} `json:"teams"`
}

// Match represents a football match
type Match struct {
	ID       primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	LeagueID string             `json:"league_id"`
	HomeTeam string             `json:"home_team"`
	AwayTeam string             `json:"away_team"`
	Date     string             `json:"date"`
}

