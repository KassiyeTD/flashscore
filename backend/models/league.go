package models

// Модель лиги
type League struct {
	ID       string `json:"id" bson:"_id"`
	Name     string `json:"name" bson:"name"`
	Country  string `json:"country" bson:"country"`
	Season   string `json:"season" bson:"season"`
}

//Модель матча (используется в `leagues.go`)
type Match struct {
	ID        string `json:"id" bson:"_id"`
	LeagueID  string `json:"league_id" bson:"league_id"`
	HomeTeam  string `json:"home_team" bson:"home_team"`
	AwayTeam  string `json:"away_team" bson:"away_team"`
	Date      string `json:"date" bson:"date"`
	Score     string `json:"score" bson:"score"`
}

//Таблица лиги
type LeagueTable struct {
	LeagueID string     `json:"league_id" bson:"league_id"`
	Teams    []TableTeam `json:"teams" bson:"teams"`
}

//Команда в таблице лиги
type TableTeam struct {
	Team   string `json:"team" bson:"team"`
	Points int    `json:"points" bson:"points"`
}



