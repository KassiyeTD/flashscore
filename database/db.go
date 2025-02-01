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

	fmt.Println("Connecting to MongoDB...")

	client, err := mongo.Connect(ctx, clientOptions)
	if err != nil {
		log.Fatalf("MongoDB connection error: %v", err)
		return err
	}

	fmt.Println("Check connection to MongoDB...")
	err = client.Ping(ctx, nil)
	if err != nil {
		log.Fatalf("MongoDB ping error: %v", err)
		return err
	}

	fmt.Println("Connection established! Execute the listDatabases command...")

	adminDB := client.Database("admin")
	var result bson.M
	err = adminDB.RunCommand(ctx, bson.D{{"listDatabases", 1}}).Decode(&result)
	if err != nil {
		log.Fatalf("Error while executing the listDatabases command: %v", err)
		return err
	}

	databases, ok := result["databases"].(bson.A)
	if !ok {
		log.Fatal("Bug: MongoDB returned an unexpected data format")
		return fmt.Errorf("unexpected MongoDB response format")
	}

	for _, dbEntry := range databases {
		dbInfo, _ := dbEntry.(bson.M)
		dbName := dbInfo["name"].(string)
		fmt.Println("\n📂 Database:", dbName)

		db := client.Database(dbName)

		var collResult bson.M
		err = db.RunCommand(ctx, bson.D{{"listCollections", 1}}).Decode(&collResult)
		if err != nil {
			fmt.Printf("  ⚠️ Error when executing listCollections: %v\n", err)
			continue
		}

		collections, ok := collResult["cursor"].(bson.M)["firstBatch"].(bson.A)
		if !ok {
			fmt.Println("  ❌ There are no collections in this database.")
			continue
		}

		if len(collections) == 0 {
			fmt.Println("  ❌ There are no collections in this database.")
		} else {
			fmt.Println("  📁 Collections:")
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
		log.Fatal("Error during data retrieval")
	}
}
