import React from "react";
import { useNavigate } from "react-router-dom";

const Interview = () => {
const navigate = useNavigate();

  const interview =
    JSON.parse(
      localStorage.getItem("interview")
    );

  return (
    <div className="min-h-screen bg-black text-white p-8">

      <div className="flex justify-between items-center mb-10">

        <h1 className="text-6xl font-bold text-green-400">
          <b>Smart Interview Generator</b>
        </h1>

        <button
          onClick={() => navigate("/dashboard")}
          className="
            bg-blue-500
            hover:bg-blue-600
            px-6
            py-3
            rounded-xl
            text-2xl
            font-bold
          "
        >
          Back
        </button>
      </div>

      <div
        className="
          bg-gradient-to-r
          from-gray-900
          to-blue-950
          p-10
          rounded-3xl
          shadow-2xl
          whitespace-pre-wrap
          text-2xl
          leading-relaxed
        "
      >
        {
          interview
          ? interview
          : "No Interview Generated Yet"
        }

      </div>

    </div>
  );
};

export default Interview;