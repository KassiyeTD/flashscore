package handlers

import (
	"context"
	"encoding/json"
	"net/http"
	"time"
	"flashscore-backend/database"
	"flashscore-backend/models"
	"github.com/golang-jwt/jwt/v4"
	"github.com/gorilla/mux"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"golang.org/x/crypto/bcrypt"
)
var jwtKey = []byte("lKW/hVoH0bRvGLgB/TtRDhjAbJUDV/5x5OFVRO4LmPw=")
var userCollection *mongo.Collection

//  Инициализация обработчиков аутентификации
func InitAuthHandlers() {
	userCollection = database.GetCollection("users")
}

// Структура для JWT-токена
type Claims struct {
	Username string `json:"username"`
	jwt.RegisteredClaims
}

// Функция хэширования пароля
func HashPassword(password string) (string, error) {
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost)
	if err != nil {
		return "", err
	}
	return string(hashedPassword), nil
}

// Функция проверки пароля
func CheckPasswordHash(password, hash string) bool {
	return bcrypt.CompareHashAndPassword([]byte(hash), []byte(password)) == nil
}

// Регистрация пользователя (POST /register)
func Register(w http.ResponseWriter, r *http.Request) {
	var user models.User
	if err := json.NewDecoder(r.Body).Decode(&user); err != nil {
		http.Error(w, "Ошибка декодирования JSON", http.StatusBadRequest)
		return
	}

	// Хэшируем пароль перед сохранением
	hashedPassword, err := HashPassword(user.Password)
	if err != nil {
		http.Error(w, "Ошибка хэширования пароля", http.StatusInternalServerError)
		return
	}
	user.Password = hashedPassword

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	_, err = userCollection.InsertOne(ctx, user)
	if err != nil {
		http.Error(w, "Ошибка сохранения пользователя", http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusCreated)
	w.Write([]byte("Пользователь успешно зарегистрирован!"))
}

// Вход пользователя и генерация JWT 
func Login(w http.ResponseWriter, r *http.Request) {
	var credentials models.User
	if err := json.NewDecoder(r.Body).Decode(&credentials); err != nil {
		http.Error(w, "Ошибка декодирования JSON", http.StatusBadRequest)
		return
	}

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	var user models.User
	err := userCollection.FindOne(ctx, bson.M{"username": credentials.Username}).Decode(&user)
	if err != nil {
		http.Error(w, "Неверные учетные данные", http.StatusUnauthorized)
		return
	}

	// Проверяем пароль
	if !CheckPasswordHash(credentials.Password, user.Password) {
		http.Error(w, "Неверные учетные данные", http.StatusUnauthorized)
		return
	}

	// Генерация JWT-токена
	expirationTime := time.Now().Add(24 * time.Hour)
	claims := &Claims{
		Username: credentials.Username,
		RegisteredClaims: jwt.RegisteredClaims{
			ExpiresAt: jwt.NewNumericDate(expirationTime),
		},
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	tokenString, err := token.SignedString(jwtKey)
	if err != nil {
		http.Error(w, "Ошибка генерации токена", http.StatusInternalServerError)
		return
	}

	// Устанавливаем токен в Cookie
	http.SetCookie(w, &http.Cookie{
		Name:    "token",
		Value:   tokenString,
		Expires: expirationTime,
	})

	// Отправляем токен в JSON-ответе
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{"token": tokenString})
}

// Получение всех пользователей 
func GetUsers(w http.ResponseWriter, r *http.Request) {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	cursor, err := userCollection.Find(ctx, bson.M{})
	if err != nil {
		http.Error(w, "Ошибка получения пользователей", http.StatusInternalServerError)
		return
	}
	defer cursor.Close(ctx)

	var users []models.User
	for cursor.Next(ctx) {
		var user models.User
		if err := cursor.Decode(&user); err != nil {
			http.Error(w, "Ошибка обработки данных пользователя", http.StatusInternalServerError)
			return
		}
		user.Password = "" 
		users = append(users, user)
	}

	json.NewEncoder(w).Encode(users)
}

// Получение пользователя по ID (GET /users/{id})
func GetUserByID(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	id, err := primitive.ObjectIDFromHex(params["id"])
	if err != nil {
		http.Error(w, "Некорректный ID пользователя", http.StatusBadRequest)
		return
	}

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	var user models.User
	err = userCollection.FindOne(ctx, bson.M{"_id": id}).Decode(&user)
	if err != nil {
		http.Error(w, "Пользователь не найден", http.StatusNotFound)
		return
	}

	user.Password = "" 
	json.NewEncoder(w).Encode(user)
}

// Удаление пользователя по ID (DELETE /users/{id})
func DeleteUser(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	id, err := primitive.ObjectIDFromHex(params["id"])
	if err != nil {
		http.Error(w, "Некорректный ID пользователя", http.StatusBadRequest)
		return
	}

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	result, err := userCollection.DeleteOne(ctx, bson.M{"_id": id})
	if err != nil {
		http.Error(w, "Ошибка удаления пользователя", http.StatusInternalServerError)
		return
	}

	if result.DeletedCount == 0 {
		http.Error(w, " Пользователь не найден", http.StatusNotFound)
		return
	}

	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Пользователь успешно удалён"))
}








