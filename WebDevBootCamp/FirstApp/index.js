const express = require("express");
const app = express()

// app.use((req, res) => {
//     console.log("I got a request");
//     res.send("Hi, we got your request!")
// })

app.get("/cats", (req, res) => {
    res.send("Got your get request from /cats")
})

app.post("/cats", (req, res) => {
    res.send("Got your post request from /cats")
})

app.get("/dogs", (req, res) => {
    res.send("Got your request from /dogs")
})

app.get("/", (req, res) => {
    res.send("Got your request from homepage")
})

app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} page`)
})

app.get("/r/:subreddit/:postID", (req, res) => {
    const { subreddit, postID } = req.params;
    res.send(`<h1>Viewing postID: ${postID} on ${subreddit} page`)
})

app.get("*", (req, res) => {
    res.send("I don't know this path! haha")
})



app.listen(3000, () => {
    console.log("listening on port 3000");
})