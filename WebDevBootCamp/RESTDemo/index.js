const express = require("express");
const app = express();
const path = require("path");
const { v4: uuid } = require("uuid");
// we cannot send patch or delete request via HTTP form so we need to use method override
const methodOverride = require("method-override");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

let comments = [
    {
        id: uuid(),
        username: "Dawei",
        comment: "lol that's funny!!"
    },
    {
        id: uuid(),
        username: "Liangyue",
        comment: "haha so relatable"
    }
]

app.get("/comments", (req, res) => {
    res.render("comments/index", { comments });
})

app.get("/comments/new", (req, res) => {
    res.render("comments/new");
})

app.get("/comments/:id", (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render("comments/show", { comment })
})

app.get("/comments/:id/edit", (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render("comments/edit", { comment });
})

app.patch("/comments/:id", (req, res) => {
    const { id } = req.params;
    const newComment = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newComment;
    res.redirect("/comments");
})

app.post("/comments", (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() });
    res.redirect("/comments");
})

app.delete("/comments/:id", (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id != id);
    res.redirect("/comments");
})

app.get("/tacos", (req, res) => {
    res.send("get tacos!");
})

app.post("/tacos", (req, res) => {
    res.send("give tacos!");
    console.log(req.body);
})

app.get("*", (req, res) => {
    res.send("hei");
})

app.listen(3000, () => {
    console.log("listening on PORT 3000");
})