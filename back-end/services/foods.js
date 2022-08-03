const db = require("../db");

async function getAllFoods() {
  const data = await db.query("select * from food");

  return {
    data,
  };
}
async function getFoodById(id) {
  const data = await db.query("SELECT * from food where id = ?", [id]);
  return {
    data,
  };
}
async function createFood(params) {
  const discount = params.discount;
  const sales = params.sales;
  const id = params.id;
  const category_id = params.category_id;
  const name = params.name;
  const price = params.price;
  const portion = params.portion;
  const stock = params.stock;
  const image = params.image;
  const ingredients = params.ingredients;
  const data = await db.query(
    `INSERT INTO category values(? , ? , ? , ? , ? , ? , ? , ? , ? ,? ) `,
    [
      discount,
      sales,
      id,
      category_id,
      name,
      price,
      portion,
      stock,
      image,
      ingredients,
    ]
  );
  return {
    hello: "HALO",
  };
}
async function updateFood(params) {
  const discount = params.discount;
  const sales = params.sales;
  const id = params.id;
  const category_id = params.category_id;
  const name = params.name;
  const price = params.price;
  const portion = params.portion;
  const stock = params.stock;
  const image = params.image;
  const ingredients = params.ingredients;
  const data = await db.query(
    "UPDATE food SET  discount =? , sales= ?,  category_id= ?, name= ?, price= ?, portion= ?, stock= ? , image= ?, ingredients= ?where id =?",
    [
      discount,
      sales,
      category_id,
      name,
      price,
      portion,
      stock,
      image,
      ingredients,
      id,
    ]
  );
  return {
    work: "this is working",
  };
}
async function deleteFood(params) {
  const id = params.id;

  const data = await db.query("DELETE FROM food where id = ?", [id]);
  return {
    data,
  };
}
module.exports = {
  getAllFoods,
  getFoodById,
  createFood,
  updateFood,
  deleteFood,
};
