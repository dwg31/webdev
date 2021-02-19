const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connection open!!!");
    })
    .catch((error) => {
        console.log(errror);
    });

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, "price must be positive!!"]
        //       ^^^error message
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    size: {
        type: String,
        enum: ["S", "M", "L"]
    }
});

const Product = mongoose.model('Product', productSchema);

const bike = new Product({ name: "Mountain Bike", price: 599 });
bike.save()
    .then(data => {
        console.log("It worked, created bike");
        console.log(data);
    })
    .catch(err => {
        console.log("Oh no, error!");
        console.log(err);
    })


const skateboard = new Product({ name: "Skateboard", price: "-139" });
skateboard.save()
    .then(data => {
        console.log("It worked, created skateboard");
        console.log(data);
    })
    .catch(err => {
        console.log("Oh no, error!");
        console.log(err);
    })
