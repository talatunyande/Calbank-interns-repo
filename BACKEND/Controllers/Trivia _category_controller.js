const TriviaCategory = require("../Models/trivia_category");
const TriviaQuestion = require("../Models/trivia_question");

// Get all available categories (from ENUM)
exports.getCategories = async (req, res) => {
  try {
    const categories = TriviaCategory.rawAttributes.category_name.values; 
    res.json({ categories });
  } catch (error) {
    res.status(500).json({ message: "Error fetching categories", error });
  }
};

//  Get questions by category name
exports.getQuestionsByCategory = async (req, res) => {
  try {
    const { categoryName } = req.params;

    // Check if category exists in ENUM
    const validCategories = TriviaCategory.rawAttributes.category_name.values;
    if (!validCategories.includes(categoryName)) {
      return res.status(400).json({ message: "Invalid category" });
    }

    // Get category and related questions
    const category = await TriviaCategory.findOne({
      where: { category_name: categoryName },
      include: [{ model: TriviaQuestion }]
    });

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.json({
      category: category.category_name,
      questions: category.TriviaQuestions
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching questions", error });
  }
};
