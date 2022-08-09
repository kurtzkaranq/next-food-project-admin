const express = require("express");
const router = express.Router();

const users = require("../services/users");

router.get("/users", async (req, res, next) => {
  console.log("ajillaj bn");
  try {
    res.json(await users.getAllUsers());
  } catch (err) {
    console.error(err.message);
    next(err);
  }
});
router.get("/users/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    res.json(await users.getUserById(id));
  } catch (err) {
    console.error(err.message);
  }
});

router.post("/users", async (req, res, next) => {
  try {
    const params = req.body;
    res.json(await users.createUser(params));
  } catch (err) {
    console.error(err.message);
    next(err);
  }
});

router.put("/users/update", async (req, res, next) => {
  try {
    const params = req.body;
    res.json(await users.updateUser(params));
  } catch (err) {
    console.error(err.message);
    next(err);
  }
});

router.delete("/users/delete", async (req, res, next) => {
  try {
    const params = req.body;
    res.json(await users.deleteUser(params));
  } catch (err) {
    console.error(err.message), next(err);
  }
});

module.exports = router;
