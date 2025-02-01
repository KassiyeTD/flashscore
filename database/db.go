package main

import (
	"context"
	"fmt"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

const uri = "mongodb+srv://Nurkanat:Nurkanat05@users.rstbs.mongodb.net/?retryWrites=true&w=majority"

func getAllDatabasesAndCollections() error {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	clientOptions := options.Client().ApplyURI(uri).SetAuth(options.Credential{
		Username: "Nurkanat",
		Password: "Nurkanat05",
	})

	fmt.Println("Подключаемся к MongoDB...")

	client, err := mongo.Connect(ctx, clientOptions)
	if err != nil {
		log.Fatalf("Ошибка подключения к MongoDB: %v", err)
		return err
	}

	fmt.Println("Проверяем соединение с MongoDB...")
	err = client.Ping(ctx, nil)
	if err != nil {
		log.Fatalf("Ошибка пинга MongoDB: %v", err)
		return err
	}

	fmt.Println("Соединение установлено! Выполняем команду listDatabases...")

	adminDB := client.Database("admin")
	var result bson.M
	err = adminDB.RunCommand(ctx, bson.D{{"listDatabases", 1}}).Decode(&result)
	if err != nil {
		log.Fatalf("Ошибка при выполнении команды listDatabases: %v", err)
		return err
	}

	databases, ok := result["databases"].(bson.A)
	if !ok {
		log.Fatal("Ошибка: MongoDB вернул неожиданный формат данных")
		return fmt.Errorf("неожиданный формат ответа MongoDB")
	}

	for _, dbEntry := range databases {
		dbInfo, _ := dbEntry.(bson.M)
		dbName := dbInfo["name"].(string)
		fmt.Println("\n📂 База данных:", dbName)

		db := client.Database(dbName)

		// Используем RunCommand вместо ListCollections
		var collResult bson.M
		err = db.RunCommand(ctx, bson.D{{"listCollections", 1}}).Decode(&collResult)
		if err != nil {
			fmt.Printf("  ⚠️ Ошибка при выполнении listCollections: %v\n", err)
			continue
		}

		collections, ok := collResult["cursor"].(bson.M)["firstBatch"].(bson.A)
		if !ok {
			fmt.Println("  ❌ В этой базе нет коллекций.")
			continue
		}

		if len(collections) == 0 {
			fmt.Println("  ❌ В этой базе нет коллекций.")
		} else {
			fmt.Println("  📁 Коллекции:")
			for _, collection := range collections {
				collInfo, _ := collection.(bson.M)
				fmt.Println("    -", collInfo["name"])
			}
		}
	}

	return nil
}

func main() {
	err := getAllDatabasesAndCollections()
	if err != nil {
		log.Fatal("Ошибка при получении данных")
	}
}
