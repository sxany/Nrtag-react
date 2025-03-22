const express = require ('express');
const { MongoClient} = require ('mongodb');
const cors = require ('cors');

const app = express();
app.use(cors());

const uri = 'mongodb+srv://Yatta:<db_password>@mdatabase.xdbtk.mongodb.net/?retryWrites=true&w=majority&appName=MDatabase';
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

        app.listen(5000, () => console.log('Server berjalan di mongoDB atlas'));

    } catch (err) {
        console.error(err);
    }
}

run();