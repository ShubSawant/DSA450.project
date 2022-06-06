import express from 'express'
import { MongoClient } from 'mongodb'
import cors from "cors"

const app = express();

// app.use(express.json())
// app.use(express.urlencoded())
// app.use(cors())
const mongocsvconn = express.Router();
var database;
var problem = problem;
var array = new Array();

MongoClient.connect("mongodb://localhost:27017", { useNewUrlParser: true, }, (error, result) => {

    if (error) throw error
    database = result.db('CSVFILE')
    console.log('connection successfull')
})

mongocsvconn.get('/', (req, resp) => {
    resp.send('Welcome to mongodb API')
})


mongocsvconn.get('/api/DSA', (req, resp) => {

    //DSAQuestions
    console.log("heloo");

    database.collection('Tablewithlink').find({}).toArray((err, result) => {


        if (err) throw err
        // console.log(result);
        resp.status(200).json(result);
    })


    //.project({question_id:0,_id:0})


});

export default mongocsvconn;
// module.exports.mongocsvconn =router;
