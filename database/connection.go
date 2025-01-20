package database

import (
	"context"
	"log"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var Client *mongo.Client

// ConnectDB initializes the MongoDB connection and stores it in the global Client variable
func ConnectDB() {
	clientOptions := options.Client().ApplyURI("mongodb://localhost:27017")
	client, err := mongo.Connect(context.TODO(), clientOptions)
	if err != nil {
		log.Fatal("Error connecting to MongoDB:", err)
	}

	// Verify the connection
	err = client.Ping(context.TODO(), nil)
	if err != nil {
		log.Fatal("MongoDB ping failed:", err)
	}

	log.Println(" MongoDB connection established successfully")
	Client = client
}

// GetCollection returns a reference to the specified collection in the database
func GetCollection(collectionName string) *mongo.Collection {
	return Client.Database("flashscore").Collection(collectionName)
}



