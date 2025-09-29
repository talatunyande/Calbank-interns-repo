const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const TriviaCategory = require("./trivia_category");
const User = require("./user"); // if you also want user relationship

// Define the model
const TriviaQuestion = sequelize.define("TriviaQuestion", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  question_text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  timestamps: false,
});

// Relationships
TriviaCategory.hasMany(TriviaQuestion, { foreignKey: "category_id" });
TriviaQuestion.belongsTo(TriviaCategory, { foreignKey: "category_id" });

// If you want user relationship
User.hasMany(TriviaQuestion, { foreignKey: "user_id" });
TriviaQuestion.belongsTo(User, { foreignKey: "user_id" });

module.exports = TriviaQuestion;

