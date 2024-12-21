const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const dotenv = require('dotenv');
const cors = require('cors');



dotenv.config();
const app = express();
const port = 3000;

const url = process.env.MONGO_URI || 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'passOP';

app.use(express.json());
app.use(cors());

async function main() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db(dbName);
        const passwordsCollection = db.collection('passwords');

        app.get('/', async (req, res) => {
            try {
                const passwords = await passwordsCollection.find({}).toArray();
                res.json(passwords);
            } catch (error) {
                res.status(500).json({ success: false, error: error.message });
            }
        });

        app.post('/', async (req, res) => {
            try {
                const password = req.body;
                const result = await passwordsCollection.insertOne(password);
                res.status(201).json({ success: true, result });
            } catch (error) {
                res.status(500).json({ success: false, error: error.message });
            }
        });


// Delete a password by id
    app.delete('/', async (req, res) => { 
    const password = req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.deleteOne(password);
    res.send({success: true, result: findResult})
    })

        

        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        process.exit(1);
    }
}

main();
