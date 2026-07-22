import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Home,
  BarChart3,
  Settings,
  TrendingUp,
  Clock3,
  Trophy,
  Brain,
  Bot,
} from "lucide-react";

const Analytics = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")) || {};

  const initials = user?.name
    ? user.name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase()
    : "IQ";

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
      {/* SIDEBAR */}

      <div
        className="
        w-20
        md:w-24
        bg-black/70
        border-r
        border-cyan-500/10
        backdrop-blur-xl
        flex
        flex-col
        items-center
        justify-between
        py-5
      "
      >
        <div className="flex flex-col items-center gap-5">
          {/* LOGO */}

          <div
            className="
            w-14
            h-14
            rounded-2xl
            bg-gradient-to-br
            from-cyan-400
            to-purple-500
            flex
            items-center
            justify-center
            text-2xl
            font-bold
            shadow-[0_0_30px_rgba(34,211,238,0.5)]
          "
          >
            IQ
          </div>

          {/* HOME */}

          <button
            onClick={() => navigate("/dashboard")}
            className="
            w-14
            h-14
            rounded-2xl
            bg-white/5
            hover:bg-gradient-to-br
            hover:from-cyan-500
            hover:to-purple-500
            flex
            items-center
            justify-center
            transition-all
            duration-300
            hover:scale-110
          "
          >
            <Home size={24} />
          </button>

          {/* ANALYTICS */}

          <button
            className="
            w-14
            h-14
            rounded-2xl
            bg-gradient-to-br
            from-cyan-500
            to-purple-500
            flex
            items-center
            justify-center
            shadow-[0_0_25px_rgba(34,211,238,0.6)]
          "
          >
            <BarChart3 size={24} />
          </button>

          {/* SETTINGS */}

          <button
            onClick={() => navigate("/settings")}
            className="
            w-14
            h-14
            rounded-2xl
            bg-white/5
            hover:bg-gradient-to-br
            hover:from-cyan-500
            hover:to-purple-500
            flex
            items-center
            justify-center
            transition-all
            duration-300
            hover:scale-110
          "
          >
            <Settings size={24} />
          </button>
        </div>

        {/* PROFILE */}

        <div
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
          font-bold
          shadow-[0_0_25px_rgba(168,85,247,0.6)]
        "
        >
          {initials}
        </div>
      </div>

      {/* MAIN CONTENT */}

      <div
        className="
        flex-1
        p-4
        md:p-8
        overflow-y-auto
      "
      >
        {/* HEADER */}

        <div
          className="
          flex
          flex-col
          md:flex-row
          justify-between
          gap-6
          mb-10
        "
        >
          <div>
            <h1
              className="
              text-4xl
              md:text-6xl
              font-black
              bg-gradient-to-r
              from-cyan-300
              via-white
              to-purple-400
              text-transparent
              bg-clip-text
            "
            >
              Analytics
            </h1>

            <p
              className="
              text-gray-400
              mt-3
              text-sm
              md:text-lg
            "
            >
              AI interview performance overview
            </p>
          </div>

          {/* LOGOUT */}

          <button
            onClick={() => {
              localStorage.clear();
              navigate("/");
            }}
            className="
            px-6
            py-3
            rounded-2xl
            bg-gradient-to-r
            from-red-500
            via-pink-500
            to-orange-400
            hover:scale-105
            hover:shadow-[0_0_35px_rgba(255,0,100,0.8)]
            transition-all
            duration-500
            font-bold
            self-start
          "
          >
            Logout
          </button>
        </div>

        {/* STATS */}

        <div
          className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-6
          mb-10
        "
        >
          {/* CARD */}

          <div
            className="
            bg-white/5
            border
            border-white/10
            rounded-3xl
            p-6
            backdrop-blur-xl
            hover:scale-[1.02]
            transition-all
            duration-300
          "
          >
            <TrendingUp className="text-cyan-400 mb-4" size={35} />

            <h2 className="text-4xl font-bold">85%</h2>

            <p className="text-gray-400 mt-2">Average Score</p>
          </div>

          <div
            className="
            bg-white/5
            border
            border-white/10
            rounded-3xl
            p-6
            backdrop-blur-xl
          "
          >
            <Clock3 className="text-purple-400 mb-4" size={35} />

            <h2 className="text-4xl font-bold">42h</h2>

            <p className="text-gray-400 mt-2">Practice Time</p>
          </div>

          <div
            className="
            bg-white/5
            border
            border-white/10
            rounded-3xl
            p-6
            backdrop-blur-xl
          "
          >
            <Trophy className="text-yellow-400 mb-4" size={35} />

            <h2 className="text-4xl font-bold">18</h2>

            <p className="text-gray-400 mt-2">Interviews Completed</p>
          </div>

          <div
            className="
            bg-white/5
            border
            border-white/10
            rounded-3xl
            p-6
            backdrop-blur-xl
          "
          >
            <Brain className="text-pink-400 mb-4" size={35} />

            <h2 className="text-4xl font-bold">92%</h2>

            <p className="text-gray-400 mt-2">AI Confidence</p>
          </div>
        </div>

        <div
          className="
          bg-white/5
          border
          border-white/10
          rounded-[35px]
          p-6
          md:p-10
          backdrop-blur-xl
          mb-10
        "
        >
          <h2
            className="
            text-3xl
            md:text-4xl
            font-bold
            mb-8
          "
          >
            Performance Insights
          </h2>

          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-3">
                <span>Technical Skills</span>

                <span className="text-cyan-400 font-bold">90%</span>
              </div>

              <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="
                  h-full
                  w-[90%]
                  bg-gradient-to-r
                  from-cyan-400
                  to-blue-500
                  rounded-full
                "
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-3">
                <span>Problem Solving</span>

                <span className="text-purple-400 font-bold">82%</span>
              </div>

              <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="
                  h-full
                  w-[82%]
                  bg-gradient-to-r
                  from-purple-400
                  to-pink-500
                  rounded-full
                "
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-3">
                <span>Communication</span>

                <span className="text-green-400 font-bold">76%</span>
              </div>

              <div className="w-full h-4 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="
                  h-full
                  w-[76%]
                  bg-gradient-to-r
                  from-green-400
                  to-emerald-500
                  rounded-full
                "
                />
              </div>
            </div>
          </div>
        </div>

        {/* AI FEEDBACK */}

        <div
          className="
          bg-gradient-to-r
          from-cyan-500/10
          to-purple-500/10
          border
          border-cyan-400/20
          rounded-[35px]
          p-6
          md:p-10
          backdrop-blur-xl
        "
        >
          <div
            className="
            flex
            items-center
            gap-4
            mb-6
          "
          >
            <Bot size={40} className="text-cyan-400" />

            <h2
              className="
              text-3xl
              md:text-4xl
              font-bold
            "
            >
              AI Feedback
            </h2>
          </div>

          <p
            className="
            text-gray-300
            text-base
            md:text-lg
            leading-8
          "
          >
            Your interview performance is improving consistently. You
            demonstrate strong backend development knowledge, confidence in
            problem-solving, and solid understanding of modern technologies.
            <br />
            <br />
            Continue practicing system design, communication, optimization
            techniques, and real-world project explanations to become placement
            ready for top product-based companies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
