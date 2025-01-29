const express = require("express");
const connectToDatabase = require("./database/db");

const app = express();
const PORT = 3000;

connectToDatabase()
    .then((db) => {
        console.log("the Data Base is ready for working");

        const collection = db.collection("users");

        app.get("/", async (req, res) => {
            const users = await collection.find({}).toArray();
            res.json(users);
        });

        app.listen(PORT, () => console.log(`The server is running on http://localhost:${PORT}`));
    })
    .catch((err) => console.error("Database initialisation error:", err));
