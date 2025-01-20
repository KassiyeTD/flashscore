package main

import (
	"log"
	"net/http"
	"flashscore-backend/database"
	"flashscore-backend/handlers"
	"flashscore-backend/routes"
	"github.com/gorilla/mux"
)

func main() {
	

	// Initialize database connection
	database.ConnectDB()

	// Initialize handlers
	handlers.InitAuthHandlers()
	handlers.InitEventHandlers()

	// Setup router and routes
	router := mux.NewRouter()
	routes.RegisterRoutes(router)

	log.Println("Server is running on port 8080")
	log.Fatal(http.ListenAndServe(":8080", router))
}







