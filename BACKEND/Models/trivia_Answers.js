const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./user");
const TriviaQuestion = require("./trivia_question");

// Define TriviaAnswer model FIRST
const TriviaAnswer = sequelize.define("TriviaAnswer", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  answer_text: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  // Instead of true/false, you can mark the correct answer
  is_correct: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
}, {
  timestamps: false,
});

// ✅ Relationships AFTER defining model
User.hasMany(TriviaAnswer, { foreignKey: "user_id", onDelete: "CASCADE" });
TriviaAnswer.belongsTo(User, { foreignKey: "user_id" });

TriviaQuestion.hasMany(TriviaAnswer, { foreignKey: "question_id", onDelete: "CASCADE" });
TriviaAnswer.belongsTo(TriviaQuestion, { foreignKey: "question_id" });

module.exports = TriviaAnswer;
