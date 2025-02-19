package main

import (
    "context"
    "fmt"
    "log"
    "time"
    "go.mongodb.org/mongo-driver/mongo"
    "go.mongodb.org/mongo-driver/mongo/options"
)

const uri = "mongodb+srv://Nurkanat:Nurkanat05@users.rstbs.mongodb.net/?retryWrites=true&w=majority"

func main() {
    ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
    defer cancel()

    clientOptions := options.Client().ApplyURI(uri).SetAuth(options.Credential{
        Username: "Nurkanat",
        Password: "Nurkanat05",
    })

    client, err := mongo.Connect(ctx, clientOptions)
    if err != nil {
        log.Fatalf("Ошибка подключения: %v", err)
    }

    err = client.Ping(ctx, nil)
    if err != nil {
        log.Fatalf("Ошибка Ping: %v", err)
    }

    fmt.Println("Подключение успешно!")
}
