const express = require("express");
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/tacos", (req, res) => {
    res.send("get tacos!");
})

app.post("/tacos", (req, res) => {
    res.send("give tacos!");
    console.log(req.body);
})

app.listen(3000, () => {
    console.log("listening on PORT 3000");
})