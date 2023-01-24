const express = require('express');
const app = express();
const mongoose = require('./database/mongoose');

const Brand = require('./database/models/brand');
const Car = require('./database/models/car');

app.use(express.json());

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
Car: Create, Update, ReadOne, ReadAll, Delete
*/

/* localhost:3000/brands/:brandId */

app.get('/brands', (req, res) => {
    Brand.find({})
        .then(brands => res.send(brands))
        .catch((error) => console.log(error));
});

app.post('/', (req, res) => {
    (new Brand({ 'title': req.body.title }))
        .save()
        .then((brand) => res.send(brand))
        .catch((error) => console.log(error));
});

app.get('/brands/:brandId', (req, res) => {
    Brand.find({ _id: req.params.brandId })
        .then((brand) => res.send(brand))
        .catch((error) = console.log(error));
});


app.patch('/brands/:brandId', (req, res) => {
    Brand.findOneAndUpdate({ '_id': req.params.brandId }, { $set: req.body })
        .then((brand) => res.send(brand))
        .catch((error) = console.log(error));
});

app.delete('/brands/:brandId', (req, res) => {
    const deleteBrands = (brand) => {
        Brand.deleteMany({ _brandId: brand._id })
            .then(() => brand)
            .catch((error) = console.log(error));
    }
    Brand.findByIdAndDelete(req.params.brandId)
        .then((brand) => deleteBrands(brand))
        .catch((error) = console.log(error));
});

//////////////////////////////////////////////////////


/*
Brand: Create, Update, ReadOne, ReadAll, Delete
*/

/* localhost:3000/brands/:brandId/cars/:carId */

app.get('/brands/:brandId/cars', (req, res) => {
    Car.find({})
        .then(cars => res.send(cars))
        .catch((error) => console.log(error));
});

app.post('/brands/:brandId/cars', (req, res) => {
    (new Car({ '_brandId': req.params.brandId, 'title': req.body.title }))
        .save()
        .then((car) => res.send(car))
        .catch((error) => console.log(error));
});

app.get('/brands/:brandId/cars/:carId', (req, res) => {
    Car.find({ _brandId: req.params.brandId, _id: req.params.carId })
        .then((car) => res.send(car))
        .catch((error) = console.log(error));
});


app.patch('/brands/:brandId/cars/:carId', (req, res) => {
    Car.findOneAndUpdate({ _brandId: req.params.brandId, _id: req.params.carId }, { $set: req.body })
        .then((car) => res.send(car))
        .catch((error) = console.log(error));
});

app.delete('/brands/:brandId/cars/:carId', (req, res) => {
    Car.findByIdAndDelete({ _brandId: req.params.brandId, _id: req.params.carId })
        .then((car) => res.send(car))
        .catch((error) = console.log(error));
});


//////////////////////////////////////////////////////


app.listen(3000, () => console.log("Server is connected on port 3000"));