
// Importing MongoClient from mongodb driver
const { MongoClient } = require('mongodb');
 
// Connecting to a local port
const uri = 'mongodb://127.0.0.1:27017';
 
const client = new MongoClient(uri, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
 
connect();
 
// ESNext syntax using async-await
async function connect() {
    try {
        await client.connect();
        const db = client.db('fruitsDB');
        console.log(
    `Successfully connected to db ${db.databaseName}`);

    const fruits = db.collection('fruits');
     
    // Insertion
    const cursorInsertion = await fruits.insertMany([
        {
            'name': 'mango',
            'rating': '5',
            'review': 'top tier fruit op hai'
        },
        {
            'name': 'Apple',
            'rating': '4',
            'review': 'solid fruit keep the doctor away'
        }]);
    console.log(cursorInsertion.insertedCount);
     
    // Display
    const cursorFind = fruits.find();
    const data = await cursorFind.toArray();
    console.table(data);
    }
    catch (err) {
        console.error(`we encountered ${err}`);
    }
    finally {
        client.close();
    }
}