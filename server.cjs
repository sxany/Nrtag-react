const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); 

const uri = "mongodb://Yatta:unapregunta12@mdatabase-shard-00-00.xdbtk.mongodb.net:27017,mdatabase-shard-00-01.xdbtk.mongodb.net:27017,mdatabase-shard-00-02.xdbtk.mongodb.net:27017/?replicaSet=atlas-1ifult-shard-0&ssl=true&authSource=admin";


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 }); 
    console.log("Pinged your deployment. Successfully connected to MongoDB!");

    const db = client.db("beritaDB");
    const newsCollection = db.collection("news");
    
    // Get all news
    app.get("/news", async (req, res) => {
      try {
        const news = await newsCollection.find().toArray();
        res.json(news);
      } catch (error) {
        res.status(500).json({ message: "Error fetching news", error });
      }
    });

    // Get single news by ID
    app.get("/news/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const news = await newsCollection.findOne({ _id: new ObjectId(id) });
        if (!news) return res.status(404).json({ message: "News not found" });
        res.json(news);
      } catch (error) {
        res.status(400).json({ message: "Invalid ID format", error });
      }
    });

 
    // Start server
    app.listen(5000, () => console.log("Server berjalan di port 5000"));
  } catch (err) {
    console.error("Error connecting to MongoDB Atlas:", err);
  }
}

run().catch(console.dir);
