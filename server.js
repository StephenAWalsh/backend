'use strict'

const express = require('express')
const debug = require('debug')('scraper:server')
const dotenv = require('dotenv')
dotenv.load()
const morgan = require('morgan')
const cors = require('cors')
const util = require('util')

const stanford = require('./routes/stanford-routes')
const app = express()
const PORT = process.env.PORT || 3000
// const CORS_ORIGINS = process.env.CORS_ORIGINS
app.use(cors())
app.use(morgan('dev'))

app.use(stanford)

app.listen(PORT, () => {
	debug(`server on ${PORT}`)
})