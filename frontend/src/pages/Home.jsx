import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {signInWithPopup} from "firebase/auth";
import {auth,provider} from "../firebase";
import loginImage from "../assets/ai.png";
import {registerUser,loginUser} from "../services/authService";

const Home = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
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
  const handleSubmit = async () => {

    try {
      if (isLogin) {

        const data = await loginUser({

          email: formData.email,
          password: formData.password,
        });

        console.log(data);

        localStorage.setItem(
          "token",
          data.token
        );
        alert("Login Successful");

        window.location.href = "/dashboard";
      }

      else {

        await registerUser(formData);

        alert("Registration Successful");
        setFormData({

          name: "",
          email: "",
          password: "",
        });
        setIsLogin(true);
      }

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Something went wrong"
      );
    }
  };
  const handleGoogleLogin = async () => {

    try {
      const result = await signInWithPopup(
        auth,
        provider
      );
      const user = result.user;

      console.log(user);

      localStorage.setItem(
        "token",
        user.accessToken
      );
      alert("Google Login Successful");

      window.location.href = "/dashboard";

    } catch (error) {

      console.log(error);

      alert(error.message);
    }
  };

  return (

    <div className="h-screen flex">

      <div className="w-1/2 bg-gray-100 flex items-center justify-center">

        <img
          src={loginImage}
          alt="login"
          className="w-[550px]"
        />

      </div>
      <div className="w-1/2 bg-blue-600 flex items-center justify-center relative overflow-hidden">

        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] border border-white rounded-full opacity-30"></div>

        <div className="absolute -bottom-20 -right-20 w-[350px] h-[350px] border border-white rounded-full opacity-30"></div>

        <div className="bg-white w-[420px] rounded-2xl p-10 shadow-2xl z-10">

          <h1 className="text-5xl font-bold mb-3">

            {isLogin
              ? "Welcome Back!"
              : "Create Account"}

          </h1>

          <p className="text-gray-500 mb-8">

            {isLogin
              ? "Login to continue"
              : "Sign Up to Get Started"}

          </p>
          {!isLogin && (

            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full mb-4 p-4 border rounded-full outline-none"
            />

          )}
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full mb-4 p-4 border rounded-full outline-none"
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            onChange={handleChange}
            className="w-full mb-6 p-4 border rounded-full outline-none"
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-full font-semibold text-lg transition"
          >

            {isLogin ? "Login" : "Register"}

          </button>

          <button
            onClick={handleGoogleLogin}
            className="w-full border mt-4 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
          >

            Continue with Google

          </button>

          <p className="text-center mt-6 text-gray-600">

            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}

            <span
              onClick={() => setIsLogin(!isLogin)}
              className="text-blue-600 font-bold cursor-pointer ml-2"
            >

              {isLogin ? "Register" : "Login"}

            </span>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Home;