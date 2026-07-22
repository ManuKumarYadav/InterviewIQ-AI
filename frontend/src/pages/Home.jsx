import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import { signInWithPopup } from "firebase/auth";

import { auth, provider } from "../firebase";

import { FaGoogle, FaRobot, FaCode, FaBrain } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",

    email: "",

    password: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      if (isLogin) {
        const response = await axios.post(
          "https://interviewiq-ai-xutu.onrender.com/api/auth/login",

          {
            email: formData.email,

            password: formData.password,
          },
        );

        localStorage.setItem(
          "token",

          response.data.token,
        );

        localStorage.setItem(
          "user",

          JSON.stringify(response.data.user),
        );

        alert("Login Successful");

        navigate("/dashboard");
      } else {
        const response = await axios.post(
          "https://interviewiq-ai-xutu.onrender.com/api/auth/register",

          {
            name: formData.name,

            email: formData.email,

            password: formData.password,
          },
        );

        localStorage.setItem(
          "token",

          response.data.token,
        );

        localStorage.setItem(
          "user",

          JSON.stringify(response.data.user),
        );

        alert("Registration Successful");

        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      localStorage.setItem(
        "token",

        user.accessToken,
      );

      localStorage.setItem(
        "user",

        JSON.stringify({
          name: user.displayName,

          email: user.email,

          photo: user.photoURL,
        }),
      );

      alert("Google Login Successful");

      navigate("/dashboard");
    } catch (error) {
      console.log(error);

      alert(error.message);
    }
  };
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#050816] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.18),_transparent_24%)]"></div>
      <div className="pointer-events-none absolute -left-20 top-24 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl"></div>
      <div className="pointer-events-none absolute right-0 top-36 h-[420px] w-[420px] rounded-full bg-cyan-400/15 blur-3xl"></div>
      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl gap-10 grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <section className="space-y-8 px-4 sm:px-0">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-sm text-cyan-200 shadow-lg shadow-cyan-500/5">
              <FaRobot className="text-cyan-300" />
              <span>AI Powered Interview Platform</span>
            </div>
            <div className="space-y-5">
              <h2 className="text-5xl font-black tracking-tight text-white sm:text-6xl">
                Crack Your{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
                  Dream Job
                </span>{" "}
                With AI
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Level up your interview preparation with AI-powered question
                generation, live coding practice, personalized feedback, and
                premium analytics tailored for software engineers.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-cyan-500/5 backdrop-blur-xl">
                <p className="text-2xl font-bold text-white">24/7</p>
                <p className="mt-2 text-sm text-slate-400">
                  Interview coaching anytime
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-violet-500/5 backdrop-blur-xl">
                <p className="text-2xl font-bold text-white">300+</p>
                <p className="mt-2 text-sm text-slate-400">
                  Question patterns covered
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-emerald-500/5 backdrop-blur-xl">
                <p className="text-2xl font-bold text-white">AI</p>
                <p className="mt-2 text-sm text-slate-400">
                  Smart feedback engine
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-indigo-500/10 backdrop-blur-xl transition hover:-translate-y-1 sm:p-7">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-2xl text-violet-300">
                <FaBrain />
              </div>
              <h3 className="text-xl font-semibold text-white">Smart AI</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Generate tailored interview questions, answers and follow-ups in
                seconds.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl transition hover:-translate-y-1">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-2xl text-cyan-300">
                <FaCode />
              </div>
              <h3 className="text-xl font-semibold text-white">
                Coding Practice
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Practice real interview problems with clear explanations and
                example solutions.
              </p>
            </div>
          </div>
        </section>
        <aside className="relative mx-auto w-full max-w-xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/5 via-white/10 to-white/5 p-6 sm:p-8 shadow-[0_35px_120px_rgba(15,23,42,0.35)] backdrop-blur-3xl">
          <div className="absolute -right-12 top-8 hidden h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl lg:block"></div>
          <div className="flex items-center justify-between gap-4 rounded-3xl bg-slate-950/70 p-5 shadow-inner shadow-white/5">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
                Premium Access
              </p>
              <h3 className="mt-3 text-3xl font-black text-white">
                AI Login Suite
              </h3>
            </div>
            <span className="rounded-full bg-cyan-500/15 px-4 py-2 text-sm font-semibold text-cyan-200">
              Fast Sign-in
            </span>
          </div>

          <div className="mt-8 space-y-6">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-lg shadow-slate-950/20">
              <div className="text-center">
                <h4 className="text-2xl font-semibold text-white">
                  {isLogin ? "Welcome Back 👋" : "Create Account"}
                </h4>
                <p className="mt-2 text-sm text-slate-400">
                  {isLogin
                    ? "Login to continue your AI journey"
                    : "Start your AI interview preparation"}
                </p>
              </div>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {!isLogin && (
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-5 py-4 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
                  />
                )}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-5 py-4 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
                />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                  className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-5 py-4 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-3xl bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-4 text-lg font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? "Please wait..." : isLogin ? "Login" : "Register"}
                </button>
              </form>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.35em] text-slate-400">
                <span className="h-[1px] flex-1 bg-white/10"></span>
                OR
                <span className="h-[1px] flex-1 bg-white/10"></span>
              </div>
              <button
                onClick={handleGoogleLogin}
                className="flex w-full items-center justify-center gap-3 rounded-3xl bg-white/90 px-5 py-4 text-sm font-semibold text-slate-950 transition hover:bg-white"
              >
                <FaGoogle className="text-red-500 text-xl" />
                Continue with Google
              </button>
              <p className="text-center text-sm text-slate-400">
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-2 font-semibold text-cyan-300 transition hover:text-cyan-200"
                >
                  {isLogin ? "Register" : "Login"}
                </button>
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Home;
