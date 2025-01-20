package models

// GameStatistics represents match statistics
type GameStatistics struct {
	GameID       string `bson:"game_id" json:"game_id"`
	Shots        int    `json:"shots"`
	Possession   int    `json:"possession"`
	PassAccuracy int    `json:"pass_accuracy"`
	YellowCards  int    `json:"yellow_cards"`
	RedCards     int    `json:"red_cards"`
}
