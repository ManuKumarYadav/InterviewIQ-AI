const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");


// ROUTES

const authRoutes = require("./routes/authRoutes");

const interviewRoutes = require("./routes/interviewRoutes");


// CONFIG

dotenv.config();


// DATABASE CONNECTION

connectDB();


// INITIALIZE APP

const app = express();


// ================= MIDDLEWARE =================

app.use(cors());

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);


// ================= API ROUTES =================

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/interview",
  interviewRoutes
);


// ================= HOME ROUTE =================

app.get("/", (req, res) => {

  res.status(200).json({

    success: true,

    message:
      "AI Interview Platform API Running",
  });

});


// ================= ERROR HANDLER =================

app.use((err, req, res, next) => {

  console.log("SERVER ERROR:", err);

  res.status(500).json({

    success: false,

    message: err.message || "Server Error",
  });

});


// ================= SERVER =================

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});