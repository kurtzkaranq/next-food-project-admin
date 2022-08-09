const express = require("express");
require("dotenv").config();
const router = express.Router();
const cors = require("cors");

const role = require("./routes/role");
const foodRouter = require("./routes/foods");
const userRouter = require("./routes/user");

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", foodRouter);

app.use("/users", userRouter);
app.use("/", role);

app.get("/", (req, res) => {
  res.send("my app is running");
});

app.listen(PORT);
