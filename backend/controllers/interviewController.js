const Interview = require("../models/Interview");

const createInterview = async (req, res) => {
  try {
    const { role, difficulty, topic } = req.body;

    const content = `
AI Mock Interview

Role: ${role}
Difficulty: ${difficulty}
Topic: ${topic}

1. Explain ${topic}

2. Advantages of ${topic}

3. Real world use case

4. Importance of ${topic}
`;

    const interview = await Interview.create({
      role,
      difficulty,
      topic,
      content,
    });

    res.status(201).json({
      success: true,
      interview,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Failed to generate interview",
    });
  }
};

module.exports = {
  createInterview,
};
