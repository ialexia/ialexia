const express = require("express")
const app = express()

app.get("/", (req, res) => {
	res.send("Hello world!")
})

app.get("/proxy", (req, res) => {
	res.send("You're not supposed to be here!")
})

app.listen(3000)
