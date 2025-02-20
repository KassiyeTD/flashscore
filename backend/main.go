package main 

import (
	"log"
	"net/http"
	"flashscore-backend/database"     
	"flashscore-backend/handlers"    
	"flashscore-backend/routes"      
	"github.com/gorilla/mux"         
	cors "github.com/gorilla/handlers" 
)

func main() {
	database.ConnectDB()

	// Инициализация обработчиков
	handlers.InitAuthHandlers()  
	handlers.InitTeamHandlers()
	handlers.InitGameHandlers()   
	handlers.InitLeagueHandlers()  
	handlers.InitEventHandlers()

	// Настройка маршрутизатора
	router := mux.NewRouter()
	routes.RegisterRoutes(router)  

	// Настройка CORS для разрешения запросов от фронтенда (React)
	headersOk := cors.AllowedHeaders([]string{"Authorization", "Content-Type"})
	originsOk := cors.AllowedOrigins([]string{"http://localhost:3000"}) // Разрешаем запросы от React
	methodsOk := cors.AllowedMethods([]string{"GET", "POST", "PUT", "DELETE"})

	// Пример настройки CORS в Go
router.Use(mux.CORSMethodMiddleware(router))
router.Use(middleware.CORSMiddleware)



	log.Println("Сервер запущен на порту 8080...")
	log.Fatal(http.ListenAndServe(":8080", handler)) 
}











