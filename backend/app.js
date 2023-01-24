const express = require('express');
const app = express();
const mongoose = require('./database/mongoose');
const List = require('./database/models/brand');
const List = require('./database/models/car');


//////////////////////////////////////////////////////


/*
CORS: Cross Origin Request Security

localhost:3000 - backend api
localhost:4200 - frontend
*/

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

//////////////////////////////////////////////////////


/*
Brand: Create, Update, ReadOne, ReadAll, Delete
Car: Create, Update, ReadOne, ReadAll, Delete
*/


app.get('/brands', (req, res) => {
    TextTrackList.find({})
        .then(lists => res.sendStatus(lists))
        .catch((error) => console.log(error));
})

//////////////////////////////////////////////////////


app.use(express.json());
app.listen(3000, () => console.log("Server is connected on port 3000"));