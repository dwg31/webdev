const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "/public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    // no need to include the file name extension (.ejs)
    // express will by default look into ./views to find the file
    res.render("home");
})

app.get("/random", (req, res) => {
    const num = Math.floor(Math.random() * 10);
    res.render("random", { num });
})

app.listen(3000, () => {
    console.log("Listening on PORT 3000");
})