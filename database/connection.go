package database
//Nurkanat-hub
import (
	"context"
	"log"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var Client *mongo.Client

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

func GetCollection(collectionName string) *mongo.Collection {
	return Client.Database("flashscore").Collection(collectionName)
}



