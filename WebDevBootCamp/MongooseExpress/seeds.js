const mongoose = require("mongoose");

const Product = require("./models/product");

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("mongo connection open!!!");
    })
    .catch((error) => {
        console.log(error);
    });

const seedProducts = [
    {
        name: "seedless grape",
        price: 3.99,
        category: 'fruit'
    },
    {
        name: "organic celery",
        price: 1.99,
        category: 'vegetable'
    },
    {
        name: "large brown eggs (1 dz)",
        price: 4.99,
        category: 'dairy'
    },
    {
        name: "organic broccli",
        price: 3.99,
        category: 'vegetable'
    },
];

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })