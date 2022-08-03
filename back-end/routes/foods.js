const express = require("express");
const router = express.Router();

const foods = require("../services/foods");

router.get("/foods", async (req, res, next) => {
  try {
    res.json(await foods.getAllFoods());
  } catch (err) {
    console.error(err.message);
    next(err);
  }
});
router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    res.json(await foods.getFoodById(id));
  } catch (err) {
    console.error(err.message);
    next(err);
  }
});
router.post("/", async (req, res, next) => {
  try {
    const params = req.body;
    res.json(await foods.createFood(params));
  } catch (err) {
    console.error(err.message);
    next(err);
  }
});
router.put("/update", async function (req, res, next) {
  try {
    const params = req.body;
    res.json(await foods.updateFood(params));
  } catch (err) {
    console.error(err.message), next(err);
  }
});
router.delete("/delete", async function (req, res, next) {
  try {
    const params = req.body;
    res.json(await foods.deleteFood(params));
  } catch (err) {
    console.error(err.message), next(err);
  }
});
module.exports = router;
