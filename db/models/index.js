
const { Answer, AnswerSchema } = require('./answer.model');

function setupModels(sequelize) {
  Answer.init(AnswerSchema, Answer.config(sequelize))
  // Answer.associate(sequelize.models)
}

module.exports = setupModels