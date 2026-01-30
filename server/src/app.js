const express = require('express')
const cors = require('cors')
const { sequelize } = require('./models')
const config = require('./config/config')

const app = express()

// ===== Middleware Section =====
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors()) // ← ใส่ CORS ตรงนี้
app.use('/assets', express.static('public'))

require('./userPassport')

// ===== Routes Section =====
require('./routes')(app)

// ===== Server Startup Section =====
const port = config.port

sequelize.sync({ force: false })
    .then(() => {
        app.listen(config.port, '0.0.0.0', () => {
            console.log('Server running on port ' + port)
        })
    })
