const { MongoClient} = require("mongodb")

let uri = "mongodb://localhost:27017"

const mongoClient = new MongoClient(uri)

mongoClient.connect()

console.log("Connecting to MongoDB Atlas cluster...");

const db = mongoClient.db("Animales")
 
const collection =  db.collection("Perritos")

const methods = {

    get: async () => await collection.find({}).toArray(),

    insert: async (newPet) => await collection.insertOne(newPet),

    update: async (name ,updatePet) => await collection.updateOne(name, updatePet),

    deleteOne: async name => await collection.deleteOne(name) 
}

module.exports = methods