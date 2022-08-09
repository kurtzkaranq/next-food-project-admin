const express = require("express");

const app = express();
app.use(express.json());

const roleRoute = express.Router();
app.use("/role", roleRoute);

const role = require("../services/role");

roleRoute.get("/roles", async (req, res, next) => {
  try {
    res.json(await role.getAllRole());
  } catch (err) {
    console.error(err.message);
    next(err);
  }
});

roleRoute.post("/roles", async (req, res, next) => {
  try {
    const params = req.body;
    res.json(await role.insertRole(params));
  } catch (err) {
    console.error(err.message);
    next(err);
  }
});

roleRoute.put("/roles", async (req, res, next) => {
  try {
    const params = req.body;
    console.log(req.body);
    res.json(await role.UpdateRole(params));
  } catch (err) {
    console.error(err.message);
    next(err);
  }
});

roleRoute.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  console.log(req.params);
  console.log(id);
  try {
    res.json(await user.getUserById(id));
  } catch (err) {
    console.error(err.message);
    next(err);
  }
});

module.exports = roleRoute;
