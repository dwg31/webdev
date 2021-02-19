const express = require("express");
const app = express();
const methodOverride = require('method-override')
const path = require("path");
const mongoose = require("mongoose");

const Product = require("./models/product");

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("mongo connection open!!!");
    })
    .catch((error) => {
        console.log(error);
    });

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))

app.get("/products/new", (req, res) => {
    res.render("products/new");
})

app.post("/products/new", async (req, res) => {
    const { name, price, category } = req.body;
    const product = new Product({ name, price, category });
    await product.save();
    res.redirect("/products");
})

app.get("/products", async (req, res) => {
    const { category } = req.query;
    const products = await Product.find({});
    res.render("products/index", { products });
});

app.get("/products/:id", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render("products/details", { product });
});

app.get("/products/:id/edit", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render("products/edit", { product });
});

app.put("/products/:id", async (req, res) => {
    const { id } = req.params;
    const { name, price, category } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(id, { name, price, category }, { runValidators: true, new: true });

    res.redirect(`/products/${updatedProduct._id}`);
})

app.delete("/products/:id", async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect(`/products`);
})

app.listen(3000, () => {
    console.log("App Listening on PORT 3000");
});