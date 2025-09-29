// models/trivia_category.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./user");

const Trivia_Category = sequelize.define("Trivia_Category", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  category_name: {
    type: DataTypes.ENUM(
      "Fraud & Security",
      "Banking Basics",
      "Economics & Security",
      "Saving & Budgeting",
      "Credit & Debt",
      "CalBank History"
    ),
    allowNull: false,
    unique: true,
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
}, {
  timestamps: false,
});

User.hasMany(Trivia_Category, { foreignKey: "user_id" });
Trivia_Category.belongsTo(User, { foreignKey: "user_id" });

module.exports = Trivia_Category;
