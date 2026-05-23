import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Interview = () => {

  const navigate = useNavigate();
  const data = JSON.parse(
    localStorage.getItem("interviewData")
  );

  const role =
    data?.role || "Frontend Developer";

  const difficulty =
    data?.difficulty || "Easy";

  const topic =
    data?.topic || "React JS";

  const [questions, setQuestions] =
    useState([]);

  const [subtopics, setSubtopics] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [activeQuestion, setActiveQuestion] =
    useState(null);

  const [activeSubtopic, setActiveSubtopic] =
    useState(null);

  useEffect(() => {
    generateInterview();

  }, []);


  const generateInterview = () => {

    setLoading(true);

    let generatedQuestions = [];

    let generatedSubtopics = [];

    if (difficulty === "Easy") {

      generatedSubtopics = [

        {
          title: "Introduction",
          brief:
            `${topic} is a widely used technology in software development. Beginners should understand its basic working, purpose, and usage in applications.`,

          example:
            `Example: Using ${topic} to build simple web applications and UI components.`,
        },

        {
          title: "Core Features",
          brief:
            `${topic} provides useful features like reusability, scalability, modularity, and performance optimization.`,

          example:
            `Example: Reusable components and API integrations.`,
        },

        {
          title: "Basic Architecture",
          brief:
            `Understanding how ${topic} works internally helps developers build better applications.`,

          example:
            `Example: Client-server communication and component structure.`,
        },

      ];

      for (let i = 1; i <= 20; i++) {

        generatedQuestions.push({

          question:
            `${i}. Explain basic concept ${i} of ${topic}.`,

          answer:
            `${topic} is an important part of modern web development and helps developers create scalable and efficient applications. It improves development speed and application maintainability. Developers use it to build reusable systems and optimize performance. Understanding this concept helps beginners gain confidence in development. It also improves problem-solving and coding structure. Companies prefer developers who understand these fundamentals properly. Learning this concept is important for interviews and real-world projects.`,

          types:
            [
              "Conceptual Type",
              "Implementation Type",
            ],

          examples:
            [
              `Building small ${topic} projects.`,
              `Using reusable modules and functions.`,
            ],

          importance:
            `${topic} fundamentals are important because they create the base for advanced software engineering concepts and enterprise development.`,
        });
      }
    }
    else if (
      difficulty === "Medium"
    ) {

      generatedSubtopics = [

        {
          title:
            "Architecture Design",

          brief:
            `${topic} architecture defines how components, modules, APIs, and services interact together in scalable applications.`,

          example:
            `Example: MVC architecture, REST API integration, reusable modules.`,
        },

        {
          title:
            "Performance Optimization",

          brief:
            `Performance optimization improves speed, scalability, memory management, and user experience.`,

          example:
            `Example: Lazy loading, caching, memoization, indexing.`,
        },

        {
          title:
            "API Integration",

          brief:
            `${topic} applications often communicate with backend services using APIs.`,

          example:
            `Example: Fetching data using Axios or Fetch API.`,
        },

        {
          title:
            "Debugging & Error Handling",

          brief:
            `Debugging helps identify application issues and improve code stability.`,

          example:
            `Example: Using console logs, try-catch blocks, middleware debugging.`,
        },

        {
          title:
            "Security Concepts",

          brief:
            `Security protects applications from unauthorized access and vulnerabilities.`,

          example:
            `Example: JWT Authentication, Password Hashing, HTTPS.`,
        },

      ];

      for (let i = 1; i <= 25; i++) {

        generatedQuestions.push({

          question:
            `${i}. Explain advanced concept ${i} of ${topic} for ${role}.`,

          answer:
            `${topic} is widely used in modern software development and plays a critical role in scalable application architecture. Developers use optimization techniques, reusable modules, and efficient coding practices to improve application performance. In medium-level interviews, interviewers expect knowledge about implementation, lifecycle, debugging, API integration, and architecture design. Understanding internal workflows and real-world integration is extremely important. Developers should also understand state management, authentication, asynchronous operations, and performance optimization strategies. Proper understanding of these concepts helps developers create enterprise-grade applications and improves technical interview performance significantly.`,

          types:
            [
              "Technical Type",
              "Architecture Type",
              "Optimization Type",
            ],

          examples:
            [
              `REST API Integration`,
              `Authentication System`,
              `Database Optimization`,
            ],

          importance:
            `This concept is important because it improves application scalability, maintainability, and performance in real-world enterprise systems.`,
        });
      }
    }
    else {

      generatedSubtopics = [

        {
          title:
            "System Design",

          brief:
            `System design focuses on building scalable, distributed, and enterprise-grade applications.`,

          example:
            `Example: Microservices architecture, distributed APIs, load balancing.`,
        },

        {
          title:
            "Scalability",

          brief:
            `Scalability ensures applications handle increasing traffic and users efficiently.`,

          example:
            `Example: Horizontal scaling, caching systems, database sharding.`,
        },

        {
          title:
            "Security & Authentication",

          brief:
            `Advanced security mechanisms protect enterprise applications from attacks.`,

          example:
            `Example: OAuth, JWT, Role-Based Access Control.`,
        },

        {
          title:
            "Optimization Techniques",

          brief:
            `Optimization improves memory usage, rendering speed, and backend efficiency.`,

          example:
            `Example: Code splitting, indexing, query optimization.`,
        },

        {
          title:
            "Deployment & DevOps",

          brief:
            `Deployment strategies help applications run smoothly in production environments.`,

          example:
            `Example: Docker, CI/CD, Kubernetes, Cloud Hosting.`,
        },

      ];

      for (let i = 1; i <= 30; i++) {

        generatedQuestions.push({

          question:
            `${i}. Explain enterprise-level concept ${i} of ${topic}.`,

          answer:
            `${topic} is deeply integrated into enterprise software development and requires strong understanding of architecture, optimization, security, scalability, and distributed systems. Senior developers should understand internal workflows, rendering cycles, memory optimization, asynchronous processing, reusable architecture patterns, and advanced debugging techniques. Interviewers also expect knowledge about caching strategies, API optimization, authentication systems, middleware integration, deployment pipelines, and cloud infrastructure. In enterprise-grade applications, developers focus heavily on maintainability, scalability, testing, monitoring, and production deployment strategies. Advanced implementation of ${topic} improves performance, reduces server overhead, increases scalability, and creates high-quality applications suitable for large organizations and real-world production environments.`,

          types:
            [
              "System Design",
              "Enterprise Architecture",
              "Scalability Pattern",
              "Optimization Strategy",
            ],

          examples:
            [
              `Microservices`,
              `Redis Caching`,
              `Docker Deployment`,
              `Kubernetes Scaling`,
            ],

          importance:
            `This concept is extremely important because enterprise applications require scalability, maintainability, performance optimization, and secure architecture.`,
        });
      }
    }

    setTimeout(() => {

      setQuestions(generatedQuestions);

      setSubtopics(generatedSubtopics);

      setLoading(false);

    }, 1500);
  };

  const conclusion = `
${topic} is one of the most powerful and widely used technologies in modern software engineering. 
A strong understanding of ${topic} helps developers build scalable, optimized, secure, and maintainable applications. 

Developers should focus on:
• Core fundamentals
• Architecture design
• Performance optimization
• Security concepts
• API integrations
• System design principles
• Deployment strategies

For ${role}, mastering ${topic} improves real-world problem-solving skills and technical interview performance significantly. 

The most important aspect is not only understanding theory but also implementing concepts practically through projects, debugging, optimization, and deployment. 

Continuous learning and real-world practice make developers industry-ready and capable of building enterprise-grade applications successfully.
`;

  return (

    <div className="min-h-screen bg-black text-white relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-[#050816] via-[#090b1a] to-black"></div>

      <div className="absolute top-0 left-0 w-full h-full opacity-20">

        <div className="absolute w-[500px] h-[500px] bg-purple-600 blur-[150px] rounded-full top-[-100px] left-[-100px]"></div>

        <div className="absolute w-[400px] h-[400px] bg-cyan-500 blur-[150px] rounded-full bottom-[-100px] right-[-100px]"></div>

      </div>

      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
          bg-[linear-gradient(to_right,#ffffff22_1px,transparent_1px),linear-gradient(to_bottom,#ffffff22_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      ></div>

      <div className="relative z-10 p-5 md:p-10">

        <div className="flex justify-between items-start mb-10">

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
            onClick={() =>
              navigate("/dashboard")
            }
            className="
              px-8
              py-4
              rounded-2xl
              border
              border-white/10
              bg-white/5
              hover:bg-blue-500
              transition-all
              duration-300
              font-semibold
            "
          >
            ← Back
          </button>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

          <div className="bg-[#070d22] border border-white/10 rounded-3xl p-6">

            <p className="text-gray-400 uppercase tracking-[4px] mb-3">
              Role
            </p>

            <h2 className="text-3xl font-bold text-cyan-300">
              {role}
            </h2>

          </div>

          <div className="bg-[#070d22] border border-white/10 rounded-3xl p-6">

            <p className="text-gray-400 uppercase tracking-[4px] mb-3">
              Difficulty
            </p>

            <h2 className="text-3xl font-bold text-purple-300">
              {difficulty}
            </h2>

          </div>

          <div className="bg-[#070d22] border border-white/10 rounded-3xl p-6">

            <p className="text-gray-400 uppercase tracking-[4px] mb-3">
              Topic
            </p>

            <h2 className="text-3xl font-bold text-green-300">
              {topic}
            </h2>

          </div>

        </div>

        <div className="mb-14">

          <h2 className="text-4xl font-black mb-8">
            Subtopics
          </h2>

          <div className="space-y-5">

            {subtopics.map(
              (item, index) => (

                <div
                  key={index}
                  className="
                    bg-white/5
                    border
                    border-white/10
                    rounded-3xl
                    overflow-hidden
                  "
                >

                  <button
                    onClick={() =>
                      setActiveSubtopic(
                        activeSubtopic === index
                          ? null
                          : index
                      )
                    }
                    className="
                      w-full
                      p-6
                      flex
                      justify-between
                      items-center
                      text-left
                    "
                  >

                    <h3 className="text-2xl font-bold text-cyan-300">
                      {item.title}
                    </h3>

                    <span className="text-3xl">
                      {activeSubtopic === index
                        ? "−"
                        : "+"}
                    </span>

                  </button>

                  {activeSubtopic === index && (

                    <div className="px-6 pb-6">

                      <div
                        className="
                          bg-[#070d22]
                          rounded-2xl
                          border
                          border-white/10
                          p-6
                        "
                      >

                        <h4 className="text-xl font-bold text-purple-300 mb-3">
                          Brief Description
                        </h4>

                        <p className="text-gray-300 leading-relaxed mb-6">
                          {item.brief}
                        </p>

                        <h4 className="text-xl font-bold text-green-300 mb-3">
                          Example
                        </h4>

                        <p className="text-gray-300">
                          {item.example}
                        </p>

                      </div>

                    </div>

                  )}

                </div>

              )
            )}

          </div>

        </div>

        <div>

          <h2 className="text-4xl font-black mb-8">
            Interview Questions & Answers
          </h2>

          {loading ? (

            <div className="text-center text-3xl font-bold mt-20">
              Generating AI Interview...
            </div>

          ) : (

            <div className="space-y-6">

              {questions.map(
                (item, index) => (

                  <div
                    key={index}
                    className="
                      bg-white/5
                      border
                      border-white/10
                      rounded-3xl
                      overflow-hidden
                    "
                  >

                    <button
                      onClick={() =>
                        setActiveQuestion(
                          activeQuestion === index
                            ? null
                            : index
                        )
                      }
                      className="
                        w-full
                        p-6
                        flex
                        justify-between
                        items-center
                        text-left
                      "
                    >

                      <h3 className="text-2xl font-bold text-cyan-300">
                        {item.question}
                      </h3>

                      <span className="text-3xl">
                        {activeQuestion === index
                          ? "−"
                          : "+"}
                      </span>

                    </button>

                    {activeQuestion === index && (

                      <div className="px-6 pb-6">

                        <div
                          className="
                            bg-[#070d22]
                            border
                            border-white/10
                            rounded-2xl
                            p-6
                            mb-6
                          "
                        >

                          <h4 className="text-2xl font-bold text-purple-300 mb-4">
                            Answer
                          </h4>

                          <p className="text-gray-300 leading-relaxed text-lg">
                            {item.answer}
                          </p>

                        </div>

                        <div
                          className="
                            bg-[#070d22]
                            border
                            border-white/10
                            rounded-2xl
                            p-6
                            mb-6
                          "
                        >

                          <h4 className="text-2xl font-bold text-cyan-300 mb-4">
                            Types
                          </h4>

                          <ul className="space-y-3">

                            {item.types.map(
                              (type, i) => (

                                <li
                                  key={i}
                                  className="text-gray-300"
                                >
                                  • {type}
                                </li>

                              )
                            )}

                          </ul>

                        </div>

                        <div
                          className="
                            bg-[#070d22]
                            border
                            border-white/10
                            rounded-2xl
                            p-6
                            mb-6
                          "
                        >

                          <h4 className="text-2xl font-bold text-green-300 mb-4">
                            Examples
                          </h4>

                          <ul className="space-y-3">

                            {item.examples.map(
                              (example, i) => (

                                <li
                                  key={i}
                                  className="text-gray-300"
                                >
                                  • {example}
                                </li>

                              )
                            )}

                          </ul>

                        </div>

                        <div
                          className="
                            bg-[#070d22]
                            border
                            border-white/10
                            rounded-2xl
                            p-6
                          "
                        >

                          <h4 className="text-2xl font-bold text-yellow-300 mb-4">
                            Importance
                          </h4>

                          <p className="text-gray-300 leading-relaxed">
                            {item.importance}
                          </p>

                        </div>

                      </div>

                    )}

                  </div>

                )
              )}

            </div>

          )}

        </div>

        {!loading && (

          <div
            className="
              mt-16
              bg-gradient-to-r
              from-purple-600/20
              to-cyan-500/20
              border
              border-white/10
              rounded-3xl
              p-8
            "
          >

            <h2 className="text-4xl font-black mb-6">
              Final Conclusion
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-wrap">
              {conclusion}
            </p>

          </div>

        )}

      </div>

    </div>
  );
};

export default Interview;