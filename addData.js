const connectToDatabase = require("./database/db");
const data = require("./data");

async function addData() {
    try {
        const db = await connectToDatabase();

        for (const [league, teams] of Object.entries(data)) {
            const collection = db.db(league).collection("teams");
            await collection.insertMany(teams);
            console.log(`The data has been added to the collection ${league}/teams`);
        }

        console.log("All data has been successfully added!");
        process.exit(0);
    } catch (err) {
        console.error("Error adding data:", err);
        process.exit(1);
    }
}

addData();
