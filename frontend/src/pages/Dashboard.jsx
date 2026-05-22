import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const navigate = useNavigate();

  const [role, setRole] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {

    if (!role || !difficulty || !topic) {

      alert("Please select all fields");
      return;
    }
    try {

      setLoading(true);
      const response = await axios.post(

        "http://localhost:5000/api/interview/generate",
        {
          role,
          difficulty,
          topic,
        }
      );
      console.log(response.data);

      localStorage.setItem(

        "interview",

        JSON.stringify(response.data.interview)

      );
      navigate("/interview");

    } catch (error) {

      console.log("ERROR:", error);

      console.log(
        error.response?.data
      );

      alert(
        error.response?.data?.message ||
        "Failed to generate AI interview"
      );

    } finally {

      setLoading(false);
    }
  };
  const handleLogout = () => {

    localStorage.removeItem("token");

    localStorage.removeItem("interview");

    navigate("/");
  };
  return (

    <div className="min-h-screen bg-black text-white p-10">

      <div className="flex justify-between items-center mb-12">

        <h1 className="text-5xl font-bold text-green-400">

          InterviewIQ AI

        </h1>

        <button
          onClick={handleLogout}
          className="
            bg-red-500
            hover:bg-red-600
            px-6
            py-3
            rounded-xl
            text-xl
            font-semibold
          "
        >
          Logout

        </button>

      </div>

      <div
        className="
          bg-gradient-to-r
          from-gray-900
          to-blue-950
          p-10
          rounded-3xl
          max-w-5xl
          mx-auto
          shadow-2xl
        "
      >

        <h2 className="text-5xl font-bold mb-12">

          Generate AI Mock Interview

        </h2>

        <div className="mb-8">

          <label className="block mb-3 text-2xl font-semibold">

            Select Role

          </label>

          <select
            value={role}
            onChange={(e) =>
              setRole(e.target.value)
            }
            className="
              w-full
              p-5
              rounded-xl
              bg-gray-800
              text-xl
              outline-none
            "
          >

            <option value="">
              Choose Role
            </option>

            <option>
              Frontend Developer
            </option>

            <option>
              Backend Developer
            </option>

            <option>
              MERN Stack Developer
            </option>

            <option>
              Java Developer
            </option>

            <option>
              Full Stack Developer
            </option>

          </select>

        </div>

        <div className="mb-8">

          <label className="block mb-3 text-2xl font-semibold">

            Difficulty Level

          </label>

          <select
            value={difficulty}
            onChange={(e) =>
              setDifficulty(e.target.value)
            }
            className="
              w-full
              p-5
              rounded-xl
              bg-gray-800
              text-xl
              outline-none
            "
          >
            <option value="">
              Choose Difficulty
            </option>

            <option>
              Easy
            </option>

            <option>
              Medium
            </option>

            <option>
              Hard
            </option>

          </select>

        </div>
        <div className="mb-10">

          <label className="block mb-3 text-2xl font-semibold">

            Interview Topic

          </label>

          <select
            value={topic}
            onChange={(e) =>
              setTopic(e.target.value)
            }
            className="
              w-full
              p-5
              rounded-xl
              bg-gray-800
              text-xl
              outline-none
            "
          >

            <option value="">
              Choose Topic
            </option>

            <option>
              React JS
            </option>

            <option>
              Node JS
            </option>

            <option>
              Express JS
            </option>

            <option>
              MongoDB
            </option>

            <option>
              JavaScript
            </option>

            <option>
              TypeScript
            </option>

            <option>
              OOPs
            </option>

            <option>
              DBMS
            </option>

            <option>
              System Design
            </option>

            <option>
              DSA
            </option>

          </select>

        </div>

        <button onClick={handleGenerate}disabled={loading}
          className="
            w-full
            bg-green-500
            hover:bg-green-600
            disabled:bg-gray-600
            py-5
            rounded-xl
            text-3xl
            font-bold
            transition-all
          "
        >

          {
            loading
            ? "Generating AI Interview..."
            : "Generate AI Interview"
          }

        </button>

      </div>

    </div>
  );
};

export default Dashboard;