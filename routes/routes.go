package routes

import (
	"github.com/gorilla/mux"
	"flashscore-backend/handlers"
	"flashscore-backend/middleware"
)

// RegisterRoutes sets up the API routes with authentication middleware
func RegisterRoutes(router *mux.Router) {
	// Apply Logging Middleware globally
	router.Use(middleware.LoggingMiddleware)

	// Authentication routes
	router.HandleFunc("/register", handlers.Register).Methods("POST")
	router.HandleFunc("/login", handlers.Login).Methods("POST")

	// Protected User Management Routes
	userRouter := router.PathPrefix("/users").Subrouter()
	userRouter.Use(middleware.AuthMiddleware)
	userRouter.HandleFunc("", handlers.GetUsers).Methods("GET")
	userRouter.HandleFunc("/{id}", handlers.GetUserByID).Methods("GET")
	userRouter.HandleFunc("/{id}", handlers.DeleteUser).Methods("DELETE")

	// Protected Event Management Routes
	eventRouter := router.PathPrefix("/events").Subrouter()
	eventRouter.Use(middleware.AuthMiddleware)
	eventRouter.HandleFunc("", handlers.GetEvents).Methods("GET")
	eventRouter.HandleFunc("", handlers.CreateEvent).Methods("POST")
	eventRouter.HandleFunc("/{id}/complete", handlers.MarkEventAsCompleted).Methods("PUT")


	// League Routes
	leagueRouter := router.PathPrefix("/leagues").Subrouter()
	leagueRouter.HandleFunc("/top5", handlers.GetTopLeagues).Methods("GET")
	leagueRouter.HandleFunc("/{id}/matches", handlers.GetLeagueMatches).Methods("GET")
	leagueRouter.HandleFunc("/{id}/table", handlers.GetLeagueTable).Methods("GET")

	// Team Routes
	teamRouter := router.PathPrefix("/teams").Subrouter()
	teamRouter.HandleFunc("/{id}", handlers.GetTeamInfo).Methods("GET")
	teamRouter.HandleFunc("/{id}/players", handlers.GetTeamPlayers).Methods("GET")
	teamRouter.HandleFunc("/{id}/news", handlers.GetTeamNews).Methods("GET")

	// Game Routes
	gameRouter := router.PathPrefix("/games").Subrouter()
	gameRouter.HandleFunc("/{id}/statistics", handlers.GetGameStatistics).Methods("GET")
	gameRouter.HandleFunc("/{id}/lineup", handlers.GetGameLineup).Methods("GET")
	gameRouter.HandleFunc("/{id}/likes", handlers.LikeGame).Methods("POST")
	gameRouter.HandleFunc("/popular", handlers.GetPopularGames).Methods("GET")
}









