const { Sequelize } = require('sequelize')
const { config } = require('../config/config')
const setupModels = require('../db/models')

const { 
  dbHost,
  dbUser,
  dbPassword,
  dbPort,
  dbName,
} = config

const USER = encodeURIComponent(dbUser)
const PASSWORD = encodeURIComponent(dbPassword)

const URI = `postgres://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true,
})

setupModels(sequelize)

sequelize.sync()

module.exports = sequelize
