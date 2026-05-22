const express = require("express");

const cors = require("cors");

const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({
  extended: true,
}));

app.use(
  "/api/auth",
  require("./routes/authRoutes")
);

app.use(
  "/api/interview",
  require("./routes/interviewRoutes")
);

app.get("/", (req, res) => {

  res.status(200).json({

    success: true,

    message:
      "AI Interview Platform API Running ",
  });
});

app.use((err, req, res, next) => {

  console.log("SERVER ERROR:", err);

  res.status(500).json({

    success: false,

    message: "Server Error",
  });
});

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );
});