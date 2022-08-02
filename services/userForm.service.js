const sequelize = require('../libs/sequelize')
const { models } = require('../libs/sequelize')// const answers = models.Answers
class userFormService {
  constructor(){
  }
  async create(data) {
    const newAnswer = await models.Answer.create(data)
    return newAnswer;
  }
  async getAll() {
    const rta = await models.Answer.findAll()
    return rta
  }
}

module.exports = userFormService;
