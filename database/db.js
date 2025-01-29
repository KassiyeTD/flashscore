//db.js
const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://Nurkanat:Nurkanat05@users.rstbs.mongodb.net/";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Успешно подключено к MongoDB!");
        return client.db("<database>"); 
    } catch (err) {
        console.error("Ошибка подключения к MongoDB:", err);
        process.exit(1); 
    }
}

module.exports = connectToDatabase;
