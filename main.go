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
	//  Подключение к MongoDB
	database.ConnectDB()

	//  Инициализация обработчиков
	handlers.InitAuthHandlers()
	handlers.InitEventHandlers()  
	handlers.InitGameHandlers()   
	handlers.InitLeagueHandlers() 
	handlers.InitTeamHandlers()   

	//  Настройка маршрутизатора
	router := mux.NewRouter()
	routes.RegisterRoutes(router)

	// Запуск сервера
	log.Println(" Сервер запущен на порту 8080...")
	log.Fatal(http.ListenAndServe(":8080", router))
}







