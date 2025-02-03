package database

import (
	"context"
	"fmt"
	"log"
	"time"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// Глобальная переменная для клиента MongoDB
var Client *mongo.Client

const uri = "mongodb+srv://Nurkanat:Nurkanat05@users.rstbs.mongodb.net/?retryWrites=true&w=majority"

// Функция подключения к MongoDB
func ConnectDB() {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	clientOptions := options.Client().ApplyURI(uri).SetAuth(options.Credential{
		Username: "Nurkanat",
		Password: "Nurkanat05",
	})

	fmt.Println("Подключение к MongoDB...")

	client, err := mongo.Connect(ctx, clientOptions)
	if err != nil {
		log.Fatalf("Ошибка подключения к MongoDB: %v", err)
	}

	// Проверяем соединение
	err = client.Ping(ctx, nil)
	if err != nil {
		log.Fatalf("Ошибка Ping MongoDB: %v", err)
	}

	fmt.Println("Успешное подключение к MongoDB!")
	Client = client
}

//  Функция для получения коллекции
func GetCollection(collectionName string) *mongo.Collection {
	return Client.Database("flashscore").Collection(collectionName)
}
