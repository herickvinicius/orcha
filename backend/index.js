const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const port = process.env.SERVER_PORT

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

require('./src/controllers/userController')(app)

app.listen(port, () => {
  console.log(`Listening on port ${port}.`)
})