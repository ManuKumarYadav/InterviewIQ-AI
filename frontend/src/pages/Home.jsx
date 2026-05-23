import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import { signInWithPopup } from "firebase/auth";

import {
  auth,
  provider,
} from "../firebase";

import {
  FaGoogle,
  FaRobot,
  FaCode,
  FaBrain,
} from "react-icons/fa";


const Home = () => {

  const navigate = useNavigate();

  const [isLogin, setIsLogin] =
    useState(true);

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({

      name: "",

      email: "",

      password: "",
    });
  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      if (isLogin) {

        const response =
          await axios.post(

            "https://interviewiq-ai-xutu.onrender.com/api/auth/login",

            {

              email:
                formData.email,

              password:
                formData.password,
            }
          );

        localStorage.setItem(

          "token",

          response.data.token
        );

        localStorage.setItem(

          "user",

          JSON.stringify(
            response.data.user
          )
        );

        alert(
          "Login Successful"
        );

        navigate("/dashboard");
      }

      else {

        const response =
          await axios.post(

           "https://interviewiq-ai-xutu.onrender.com/api/auth/register",

            {

              name:
                formData.name,

              email:
                formData.email,

              password:
                formData.password,
            }
          );

        localStorage.setItem(

          "token",

          response.data.token
        );

        localStorage.setItem(

          "user",

          JSON.stringify(
            response.data.user
          )
        );

        alert(
          "Registration Successful"
        );

        navigate("/dashboard");
      }

    } catch (error) {

      console.log(error);

      alert(

        error.response?.data
          ?.message ||

        "Something went wrong"
      );

    } finally {

      setLoading(false);
    }
  };
  const handleGoogleLogin =
    async () => {

      try {

        const result =
          await signInWithPopup(
            auth,
            provider
          );

        const user =
          result.user;

        localStorage.setItem(

          "token",

          user.accessToken
        );

        localStorage.setItem(

          "user",

          JSON.stringify({

            name:
              user.displayName,

            email:
              user.email,

            photo:
              user.photoURL,
          })
        );

        alert(
          "Google Login Successful"
        );

        navigate("/dashboard");

      } catch (error) {

        console.log(error);

        alert(error.message);
      }
    };
  return (

    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-950 via-black to-cyan-950 opacity-70"></div>

      <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600 rounded-full blur-[120px] opacity-20"></div>

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500 rounded-full blur-[120px] opacity-20"></div>

      <div className="relative z-10 min-h-screen flex flex-col lg:flex-row">

        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-14 py-16">

          <div className="max-w-xl">

            <div className="inline-flex items-center gap-3 bg-white/10 border border-white/10 px-5 py-2 rounded-full mb-8 backdrop-blur-md">

              <FaRobot className="text-green-400 text-xl" />

              <span className="text-sm tracking-wide">

                AI Powered Interview Platform

              </span>

            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-8">

              Crack Your

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">

                {" "}Dream Job

              </span>

              {" "}With AI 🚀

            </h1>

            <p className="text-gray-300 text-lg sm:text-xl leading-9 mb-10">

              Practice technical interviews smarter with AI-generated questions, answers, coding examples, and explanations for MERN Stack, DSA, React, Java, DBMS, and more.

            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:scale-105 transition duration-300">

                <FaBrain className="text-3xl text-purple-400 mb-4" />

                <h3 className="font-bold text-xl mb-2">

                  Smart AI

                </h3>

                <p className="text-gray-300 text-sm">

                  Generate AI-powered interview questions instantly.

                </p>

              </div>

              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:scale-105 transition duration-300">

                <FaCode className="text-3xl text-cyan-400 mb-4" />

                <h3 className="font-bold text-xl mb-2">

                  Coding Practice

                </h3>

                <p className="text-gray-300 text-sm">

                  Learn concepts with coding examples and explanations.

                </p>

              </div>

            </div>

          </div>

        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-10">

          <div className="w-full max-w-md bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl">

            <div className="text-center mb-10">

              <h2 className="text-4xl font-bold mb-3">

                {
                  isLogin
                    ? "Welcome Back 👋"
                    : "Create Account"
                }

              </h2>

              <p className="text-gray-300">

                {
                  isLogin
                    ? "Login to continue your AI journey"
                    : "Start your AI interview preparation"
                }

              </p>

            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {!isLogin && (

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full bg-black/30 border border-gray-700 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
                />

              )}

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full bg-black/30 border border-gray-700 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
              />

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="w-full bg-black/30 border border-gray-700 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 transition"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-cyan-500 to-green-500 hover:scale-[1.02] transition duration-300 py-4 rounded-2xl text-lg font-bold shadow-lg"
              >

                {
                  loading
                    ? "Please wait..."
                    : isLogin
                    ? "Login"
                    : "Register"
                }

              </button>

            </form>

            <div className="flex items-center gap-4 my-8">

              <div className="flex-1 h-[1px] bg-gray-700"></div>

              <span className="text-gray-400 text-sm">

                OR

              </span>

              <div className="flex-1 h-[1px] bg-gray-700"></div>

            </div>

            <button
              onClick={handleGoogleLogin}
              className="w-full flex items-center justify-center gap-3 bg-white text-black hover:bg-gray-200 transition py-4 rounded-2xl font-semibold"
            >

              <FaGoogle className="text-red-500 text-xl" />

              Continue with Google

            </button>

            <p className="text-center text-gray-300 mt-8">

              {
                isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"
              }

              <span
                onClick={() =>
                  setIsLogin(!isLogin)
                }
                className="ml-2 text-cyan-400 font-bold cursor-pointer hover:text-cyan-300"
              >

                {
                  isLogin
                    ? "Register"
                    : "Login"
                }

              </span>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Home;