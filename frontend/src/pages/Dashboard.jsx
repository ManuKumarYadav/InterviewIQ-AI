import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import {
  FaHome,
  FaRobot,
  FaChartBar,
  FaCog,
} from "react-icons/fa";

const Dashboard = () => {

  const navigate = useNavigate();

  const storedUser = JSON.parse(
    localStorage.getItem("user")
  );

  const user = storedUser || {
    name: "Interview User",
  };

  const initials = user.name
    ?.split(" ")
    ?.map((word) => word[0])
    ?.join("")
    ?.toUpperCase();

  const [role, setRole] =
    useState("");

  const [difficulty, setDifficulty] =
    useState("");

  const [topic, setTopic] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleGenerate = async () => {

    if (
      !role ||
      !difficulty ||
      !topic
    ) {

      alert(
        "Please select all fields"
      );

      return;
    }

    try {

      setLoading(true);

      const token =
        localStorage.getItem(
          "token"
        );

      const response =
        await axios.post(
          "https://interviewiq-ai-xutu.onrender.com/api/interview/create",
          {
            role,
            difficulty,
            topic,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

      console.log(response.data);

      localStorage.setItem(
        "interviewData",
        JSON.stringify(
          response.data
        )
      );

      localStorage.setItem(
        "interviewConfig",
        JSON.stringify({
          role,
          difficulty,
          topic,
        })
      );

      navigate("/interview");

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data
          ?.message ||
          "Failed to generate interview"
      );

    } finally {

      setLoading(false);
    }
  };
  const handleLogout = () => {

    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "user"
    );

    navigate("/");
  };
  const handleSettings = () => {

    navigate("/settings");
  };

  const handleAnalytics = () => {

    navigate("/analytics");
  };
  const handleHome = () => {

    navigate("/dashboard");
  };
  const handleInterview = () => {

    navigate("/interview");
  };

  return (

    <div
      className="
      min-h-screen
      bg-black
      text-white
      flex
      overflow-hidden
    "
    >

      <div
        className="
        w-[85px]
        bg-black/80
        border-r
        border-white/10
        flex
        flex-col
        justify-between
        items-center
        py-5
        backdrop-blur-xl
      "
      >

        <div
          className="
          flex
          flex-col
          items-center
          gap-5
        "
        >

          <div
            className="
            w-14
            h-14
            rounded-2xl
            bg-gradient-to-r
            from-cyan-400
            to-purple-500
            flex
            items-center
            justify-center
            text-2xl
            font-black
            shadow-lg
          "
          >

            IQ

          </div>

          <div
            className="
            flex
            flex-col
            gap-5
            mt-6
          "
          >

            <button
              onClick={handleHome}
              className="
              w-14
              h-14
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              to-purple-500
              flex
              items-center
              justify-center
              text-xl
              hover:scale-110
              transition-all
              duration-300
              shadow-lg
            "
            >

              <FaHome />

            </button>

            <button
              onClick={
                handleInterview
              }
              className="
              w-14
              h-14
              rounded-2xl
              bg-white/10
              hover:bg-gradient-to-r
              hover:from-cyan-500
              hover:to-purple-500
              flex
              items-center
              justify-center
              text-xl
              hover:scale-110
              transition-all
              duration-300
            "
            >

              <FaRobot />

            </button>

            <button
              onClick={
                handleAnalytics
              }
              className="
              w-14
              h-14
              rounded-2xl
              bg-white/10
              hover:bg-gradient-to-r
              hover:from-cyan-500
              hover:to-purple-500
              flex
              items-center
              justify-center
              text-xl
              hover:scale-110
              transition-all
              duration-300
            "
            >

              <FaChartBar />

            </button>

            <button
              onClick={
                handleSettings
              }
              className="
              w-14
              h-14
              rounded-2xl
              bg-white/10
              hover:bg-gradient-to-r
              hover:from-cyan-500
              hover:to-purple-500
              flex
              items-center
              justify-center
              text-xl
              hover:scale-110
              transition-all
              duration-300
            "
            >

              <FaCog />

            </button>

          </div>

        </div>

        <button
          onClick={
            handleSettings
          }
          className="
          w-14
          h-14
          rounded-full
          bg-gradient-to-r
          from-cyan-400
          to-purple-500
          flex
          items-center
          justify-center
          text-xl
          font-black
          shadow-lg
          hover:scale-110
          transition-all
          duration-300
        "
        >

          {initials}

        </button>

      </div>
      <div
        className="
        flex-1
        relative
        overflow-y-auto
      "
      >

        <div
          className="
          absolute
          inset-0
          bg-gradient-to-br
          from-purple-950/20
          via-black
          to-cyan-950/20
        "
        ></div>

        <div
          className="
          absolute
          inset-0
          opacity-10
          bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
        ></div>

        <div
          className="
          relative
          z-10
          px-5
          md:px-12
          py-8
        "
        >

          <div
            className="
            flex
            justify-between
            items-start
            flex-wrap
            gap-5
          "
          >

            <div>

              <h1
                className="
                text-4xl
                md:text-7xl
                font-black
                bg-gradient-to-r
                from-cyan-300
                via-white
                to-purple-400
                bg-clip-text
                text-transparent
              "
              >

                InterviewIQ

              </h1>

              <p
                className="
                text-gray-400
                mt-2
                text-sm
                md:text-lg
              "
              >

                Smart AI Powered Interview Platform

              </p>

            </div>

            <button
              onClick={
                handleLogout
              }
              className="
              relative
              overflow-hidden
              px-7
              py-3
              rounded-2xl
              font-bold
              text-white
              bg-gradient-to-r
              from-red-500
              via-pink-500
              to-orange-400
              transition-all
              duration-500
              hover:scale-110
              hover:shadow-[0_0_35px_rgba(255,0,100,0.9)]
              active:scale-95
            "
            >

              Logout

            </button>

          </div>

          <div
            className="
            max-w-4xl
            mx-auto
            mt-12
            bg-white/5
            border
            border-white/10
            backdrop-blur-2xl
            rounded-[35px]
            p-6
            md:p-12
            shadow-[0_0_80px_rgba(139,92,246,0.15)]
          "
          >

            <h2
              className="
              text-4xl
              md:text-6xl
              font-black
              leading-tight
            "
            >

              Design your session

            </h2>

            <p
              className="
              text-gray-400
              mt-4
              text-lg
            "
            >

              Configure your AI mock interview parameters.

            </p>

            <div
              className="
              mt-10
              space-y-8
            "
            >

              <div>

                <label
                  className="
                  block
                  text-gray-400
                  uppercase
                  tracking-[5px]
                  text-xs
                  mb-4
                "
                >

                  Target Role

                </label>

                <select
                  value={role}
                  onChange={(e) =>
                    setRole(
                      e.target.value
                    )
                  }
                  className="
                  w-full
                  bg-[#020824]
                  border
                  border-purple-500/30
                  rounded-2xl
                  px-6
                  py-5
                  text-lg
                  outline-none
                "
                >

                  <option value="">
                    Select a position...
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

              <div
                className="
                grid
                grid-cols-1
                md:grid-cols-2
                gap-6
              "
              >

                <div>

                  <label
                    className="
                    block
                    text-gray-400
                    uppercase
                    tracking-[5px]
                    text-xs
                    mb-4
                  "
                  >

                    Difficulty

                  </label>

                  <select
                    value={difficulty}
                    onChange={(e) =>
                      setDifficulty(
                        e.target.value
                      )
                    }
                    className="
                    w-full
                    bg-[#020824]
                    border
                    border-purple-500/30
                    rounded-2xl
                    px-6
                    py-5
                    text-lg
                    outline-none
                  "
                  >

                    <option value="">
                      Select Level...
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

                <div>

                  <label
                    className="
                    block
                    text-gray-400
                    uppercase
                    tracking-[5px]
                    text-xs
                    mb-4
                  "
                  >

                    Topic

                  </label>

                  <select
                    value={topic}
                    onChange={(e) =>
                      setTopic(
                        e.target.value
                      )
                    }
                    className="
                    w-full
                    bg-[#020824]
                    border
                    border-purple-500/30
                    rounded-2xl
                    px-6
                    py-5
                    text-lg
                    outline-none
                  "
                  >

                    <option value="">
                      Select Topic...
                    </option>

                    <option>
                      React JS
                    </option>

                    <option>
                      Node JS
                    </option>

                    <option>
                      MongoDB
                    </option>

                    <option>
                      Express JS
                    </option>

                    <option>
                      JavaScript
                    </option>

                    <option>
                      Java
                    </option>

                    <option>
                      DSA
                    </option>

                  </select>

                </div>

              </div>

              <button
                onClick={
                  handleGenerate
                }
                disabled={loading}
                className="
                w-full
                py-5
                rounded-2xl
                text-xl
                md:text-2xl
                font-black
                bg-gradient-to-r
                from-purple-600
                via-indigo-500
                to-cyan-500
                hover:scale-[1.01]
                transition
                duration-300
                shadow-[0_0_40px_rgba(168,85,247,0.4)]
                disabled:opacity-50
              "
              >

                {loading
                  ? "Generating..."
                  : "Generate Interview Session"}

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;