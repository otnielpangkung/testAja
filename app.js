const express = require('express')
const app = express()
const port = 3001
const routers = require("./routers")
const cors = require("cors")
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/', routers)
app.get("/test", (req, res) => {
    res.send("Halooo")
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})