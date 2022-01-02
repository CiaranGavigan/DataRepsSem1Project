const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')
const bodyParser = require('body-parser');
const path = require('path');


app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});


app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())

const mongoose = require('mongoose');

const strConnection = 'mongodb+srv://admin1:admin1@gamesstart.npppg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

main().catch(err => console.log(err));


async function main() {
    await mongoose.connect(strConnection);
  }

  const gameSchema = new mongoose.Schema({
    Title:String,
    Year:String,
    Poster:String,
    Platform:String,
    AgeRating:String
});




const gameModel = mongoose.model('GameStart', gameSchema);

app.get('/api/movies', (req,res)=>{
    gameModel.find((err,data)=>{
        res.json(data)
    })
})

app.post('/api/movies', (req,res)=>{
    console.log(req.body);
    console.log(req.body.Title);
    console.log(req.body.Year);
    console.log(req.body.Poster);
    console.log(req.body.Platform);
    console.log(req.body.AgeRating);

    gameModel.create({
        Title:req.body.Title,
        Year:req.body.Year,
        Poster:req.body.Poster,
        Platform:req.body.Platform,
        AgeRating:req.body.AgeRating

    });
    res.send('Data Sent to Server!')
})

app.get('/api/movies/:id',(req, res)=>{
    console.log(req.params.id);

    gameModel.findById(req.params.id,(error,data)=>{
        res.json(data);
    });
})

app.put('/api/movies/:id',(req, res)=>{
    console.log('update');
    console.log(req.body);
    console.log("Updating: " + req.params.id);

    gameModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
        (err,data)=>{
            res.send(data);
        })

})

app.delete('/api/movies/:id', (req,res)=>{
    console.log("delete Game: " +req.params.id);

    gameModel.findByIdAndDelete(req.params.id,(err, data)=>{
        res.send(data);
    })

})



app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}` ) 
})