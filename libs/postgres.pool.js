const { Pool } = require('pg')
const { config } = require('../config/config')

const USER = encodeURIComponent(config.dbUser)
const PASSWORD = encodeURIComponent(config.dbPassword)
const { 
  dbHost,
  dbPort,
  dbName
} = config

const URI = `postgres://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`

const pool = new Pool({ connectionString: URI })

module.exports = pool