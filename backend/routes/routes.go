package routes

import (
	"github.com/gorilla/mux"
	"flashscore-backend/handlers"
	"flashscore-backend/middleware"
)

// Регистрация маршрутов API
func RegisterRoutes(router *mux.Router) {
	// Глобальное логирование всех запросов
	router.Use(middleware.LoggingMiddleware)

	// Аутентификация
	router.HandleFunc("/register", handlers.Register).Methods("POST")
	router.HandleFunc("/login", handlers.Login).Methods("POST")

	// Защищённые маршруты (JWT)
	protectedRoutes := router.PathPrefix("/").Subrouter()
	protectedRoutes.Use(middleware.AuthMiddleware)

	// Пользователи
	protectedRoutes.HandleFunc("/users", handlers.GetUsers).Methods("GET")
	protectedRoutes.HandleFunc("/users/{id}", handlers.GetUserByID).Methods("GET")
	protectedRoutes.HandleFunc("/users/{id}", handlers.DeleteUser).Methods("DELETE")

	// События
	protectedRoutes.HandleFunc("/events", handlers.GetEvents).Methods("GET")
	protectedRoutes.HandleFunc("/events", handlers.CreateEvent).Methods("POST")

	// Лиги
	router.HandleFunc("/leagues", handlers.GetLeagues).Methods("GET")
	router.HandleFunc("/leagues/{id}/matches", handlers.GetLeagueMatches).Methods("GET")
	router.HandleFunc("/leagues/{id}/table", handlers.GetLeagueTable).Methods("GET")

	// Команды
	router.HandleFunc("/teams", handlers.GetTeams).Methods("GET")
	router.HandleFunc("/teams/{id}", handlers.GetTeamByID).Methods("GET")

	// Игры
	router.HandleFunc("/games/{id}/statistics", handlers.GetGameStatistics).Methods("GET")
	router.HandleFunc("/games/{id}/lineup", handlers.GetGameLineup).Methods("GET")
	router.HandleFunc("/games/{id}/likes", handlers.LikeGame).Methods("POST")
	router.HandleFunc("/games/popular", handlers.GetPopularGames).Methods("GET")
}












