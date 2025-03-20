const express = require ('express');
const { MongoClient} = require ('mongodb');
const cors = require ('cors');

const app = express();
app.use(cors());

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        const db = client.db('beritaDB');
        const newsCollection = db.collection('news');

        app.get("/news", async (req, res) =>{
            const news = await newsCollection.find().toArray();
            res.json(news);
        });

        app.get("/news/:id", async (req, res) => {
            const news = await newsCollection.findOne({ id: req.params.id});
            res.json(news);
        });

        app.listen(5000, () => console.log('Server berjalan di port 5000'));

    } catch (err) {
        console.error(err);
    }
}

run();