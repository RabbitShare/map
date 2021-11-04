const express = require('express')
const app = express()
const port = 3002
const cors = require('cors')

app.use(cors({ origin: '*' }))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

let wifies = [{ asd: 123, qwe: 1 }]

app.get('/wifi', (req, res) => {
    res.send(wifies)
})

app.post('/wifi', (req, res) => {
    console.log(req.body)
    console.log(req.body.asd)
    wifies.push()
    if (req.body.asd) res.sendStatus(200)
    else res.sendStatus(500)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
