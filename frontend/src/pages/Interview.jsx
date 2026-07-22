import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Interview = () => {
  const navigate = useNavigate();

  const data = JSON.parse(localStorage.getItem("interviewData"));

  const difficulty = data?.difficulty || "Easy";
  const topic = data?.topic || "React JS";

  const [questions, setQuestions] = useState([]);
  const [subtopics, setSubtopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const generateInterview = () => {
    setLoading(true);

    let generatedQuestions = [];
    let generatedSubtopics = [];

    if (difficulty === "Easy") {
      generatedSubtopics = [
        {
          title: "Introduction",
          brief: `${topic} is a widely used technology in software development.`,
          example: `Example: Using ${topic} to build web applications.`,
        },

        {
          title: "Core Features",
          brief: `${topic} provides scalability, modularity, and reusability.`,
          example: `Example: Reusable UI components and APIs.`,
        },
      ];

      for (let i = 1; i <= 15; i++) {
        generatedQuestions.push({
          question: `${i}. Explain basic concept ${i} of ${topic}.`,
          answer: `${topic} helps developers build scalable and efficient applications.`,
          types: ["Conceptual", "Implementation"],
          examples: [`Building ${topic} projects`, `Reusable modules`],
          importance: `${topic} fundamentals are important for interviews and projects.`,
        });
      }
    } else {
      generatedSubtopics = [
        {
          title: "System Design",
          brief: "System design focuses on scalable applications.",
          example: "Example: APIs, deployment, caching.",
        },

        {
          title: "Performance Optimization",
          brief: "Optimization improves application speed and UX.",
          example: "Example: Lazy loading and memoization.",
        },
      ];

      for (let i = 1; i <= 20; i++) {
        generatedQuestions.push({
          question: `${i}. Explain advanced concept ${i} of ${topic}.`,
          answer: `${topic} plays a major role in scalable software development.`,
          types: ["Technical", "Architecture", "Optimization"],
          examples: [
            "REST APIs",
            "JWT Authentication",
            "Database Optimization",
          ],
          importance:
            "Important for enterprise applications and system scalability.",
        });
      }
    }

    setTimeout(() => {
      setQuestions(generatedQuestions);
      setSubtopics(generatedSubtopics);
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    if (!data) {
      navigate("/dashboard");
      return;
    }

    generateInterview();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#050816] via-[#090b1a] to-black"></div>

      <div className="relative z-10 p-5 md:p-10">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1
              className="
                text-5xl
                md:text-7xl
                font-black
                bg-gradient-to-r
                from-white
                via-cyan-300
                to-purple-400
                bg-clip-text
                text-transparent
              "
            >
              Smart Interview
            </h1>

            <p className="text-gray-400 mt-3 text-lg">
              AI Powered Interview Session
            </p>
          </div>

          <button
            onClick={() => navigate("/dashboard")}
            className="
              px-6
              py-3
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              to-purple-600
              hover:scale-105
              transition-all
              duration-300
              font-semibold
            "
          >
            Back
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-[60vh]">
            <div className="text-center">
              <div className="w-20 h-20 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto"></div>

              <h2 className="text-3xl font-bold mt-6">
                Generating Interview...
              </h2>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {subtopics.map((item, index) => (
                <div
                  key={index}
                  className="
                    p-6
                    rounded-3xl
                    bg-white/5
                    border
                    border-white/10
                    backdrop-blur-xl
                    hover:border-cyan-400
                    hover:scale-[1.02]
                    transition-all
                  "
                >
                  <h2 className="text-2xl font-bold mb-3 text-cyan-300">
                    {item.title}
                  </h2>

                  <p className="text-gray-300 leading-7">{item.brief}</p>
                </div>
              ))}
            </div>

            <div className="space-y-5">
              {questions.map((q, index) => (
                <div
                  key={index}
                  onClick={() => setActiveQuestion(index)}
                  className="
                    p-6
                    rounded-3xl
                    bg-white/5
                    border
                    border-white/10
                    hover:border-purple-500
                    transition-all
                    cursor-pointer
                  "
                >
                  <h2 className="text-xl font-bold text-white mb-4">
                    {q.question}
                  </h2>

                  {activeQuestion === index && (
                    <div className="space-y-4 text-gray-300 leading-7">
                      <p>{q.answer}</p>

                      <div>
                        <span className="font-bold text-cyan-300">Types:</span>

                        <ul className="list-disc ml-6 mt-2">
                          {q.types.map((type, i) => (
                            <li key={i}>{type}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <span className="font-bold text-purple-300">
                          Examples:
                        </span>

                        <ul className="list-disc ml-6 mt-2">
                          {q.examples.map((example, i) => (
                            <li key={i}>{example}</li>
                          ))}
                        </ul>
                      </div>

                      <p>
                        <span className="font-bold text-green-300">
                          Importance:
                        </span>{" "}
                        {q.importance}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Interview;
