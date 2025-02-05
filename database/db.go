package database

import (
	"context"
	"fmt"
	"log"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var Client *mongo.Client

const uri = "mongodb+srv://Nurkanat:Nurkanat05@users.rstbs.mongodb.net/?retryWrites=true&w=majority"

func ConnectDB() {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	clientOptions := options.Client().ApplyURI(uri).SetAuth(options.Credential{
		Username: "Nurkanat",
		Password: "Nurkanat05",
	})

	fmt.Println("Connecting to MongoDB...")

	client, err := mongo.Connect(ctx, clientOptions)
	if err != nil {
		log.Fatalf("MongoDB connection error: %v", err)
	}

	err = client.Ping(ctx, nil)
	if err != nil {
		log.Fatalf("Ping MongoDB error: %v", err)
	}

	fmt.Println("Successful connection to MongoDB!")
	Client = client
}

func GetCollection(collectionName string) *mongo.Collection {
	return Client.Database("flashscore").Collection(collectionName)
}
