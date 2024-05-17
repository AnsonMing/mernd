const express = require("express")
const app = express()

const mongoose = require("mongoose")

mongoose.connect("mongodb://root:password@mongoDB:27017")
    .then(() => {
        console.log("mongoDB connected...")
    })
    .catch((e) => {
        console.log(e)
    })

app.get("/api/:_id", (req, res) => {
    let {_id} = req.params
    return res.send(`connected ${_id}...`)
})

app.get("/api", (req, res) => {
    return res.send("connected complete...")
})



app.listen(3001, () => {
    console.log("server running on 3001 port...")
})