const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/movieApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connection open!!!");
    })
    .catch((error) => {
        console.log(errror);
    })


const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model("Movie", movieSchema);

const interstellar = new Movie({ title: "Interstellar", year: 2015, score: 9.2, rating: "PG-13" });