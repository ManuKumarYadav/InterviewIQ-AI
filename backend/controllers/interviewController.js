const axios = require("axios");

exports.generateInterview = async (req, res) => {
  try {
    const {
      role,
      difficulty,
      topic,
    } = req.body;

    const prompt = `
Generate interview questions and answers.

Role: ${role}
Difficulty: ${difficulty}
Topic: ${topic}

Explain in easy language with examples.
`;

    const response = await axios.post("https://openrouter.ai/api/v1/chat/completions",
      {
        model: "deepseek/deepseek-chat",

        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      },
      {
        headers: {

          Authorization:
            `Bearer ${process.env.OPENROUTER_API_KEY}`,

          "Content-Type":
            "application/json",
        },
      }
    );
    const interview =
      response.data.choices[0]
      .message.content;

    res.status(200).json({

      success: true,
      interview,

    });
  } catch (error) {

    console.log("AI ERROR:", error.response?.data || error.message);

    res.status(500).json({

      success: false,

      message: "Failed to generate AI interview",
    });
  }
};