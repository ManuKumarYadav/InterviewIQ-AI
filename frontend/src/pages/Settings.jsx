import React from "react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();

  const user =
    JSON.parse(localStorage.getItem("user"));

  return (
    <div
      className="
        min-h-screen
        bg-black
        text-white
        p-10
      "
    >

      <div
        className="
          flex
          justify-between
          items-center
          mb-10
        "
      >

        <h1
          className="
            text-6xl
            font-black
            bg-gradient-to-r
            from-cyan-300
            to-purple-400
            bg-clip-text
            text-transparent
          "
        >
          Settings
        </h1>

        <button
          onClick={() =>
            navigate("/dashboard")
          }
          className="
            px-6
            py-3
            rounded-2xl
            bg-white/10
            border
            border-white/10
          "
        >
          Back
        </button>

      </div>

      <div
        className="
          max-w-3xl
          bg-white/5
          border
          border-white/10
          rounded-3xl
          p-10
          backdrop-blur-xl
        "
      >

        <div
          className="
            w-28
            h-28
            rounded-full
            bg-gradient-to-r
            from-cyan-400
            to-purple-500
            flex
            items-center
            justify-center
            text-4xl
            font-black
            mb-8
          "
        >
          {
            user?.name
              ?.split(" ")
              ?.map((word) => word[0])
              ?.join("")
              ?.toUpperCase()
          }
        </div>

        <h2 className="text-3xl font-bold">
          {user?.name}
        </h2>

        <p className="text-gray-400 mt-2">
          {user?.email}
        </p>

        <div className="mt-10 space-y-6">

          <div
            className="
              bg-[#111827]
              p-6
              rounded-2xl
            "
          >
            <h3 className="text-2xl font-bold">
              Account Settings
            </h3>

            <p className="text-gray-400 mt-2">
              Manage your interview
              preferences and account.
            </p>
          </div>

          <div
            className="
              bg-[#111827]
              p-6
              rounded-2xl
            "
          >
            <h3 className="text-2xl font-bold">
              Security
            </h3>

            <p className="text-gray-400 mt-2">
              Your account is securely
              protected with JWT
              authentication.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Settings;