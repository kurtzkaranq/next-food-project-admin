const db = require("../db");

async function getAllUsers() {
  const data = await db.query("select * from user");
  console.log(data);
  return {
    data,
  };
}
async function getUserById(id) {
  const data = await db.query("SELECT * from user where id = ?", [id]);
  return {
    data,
  };
}
async function createUser(params) {
  const id = params.id;
  const firstName = params.firstName;
  const lastName = params.lastName;
  const role_id = params.role_id;
  const email = params.email;
  const address = params.address;
  const number = params.number;

  const data = await db.query(
    `INSERT INTO user values(? , ? , ? , ? , ? , ? , ? , ? , ? ,? ) `,
    [id, firstName, lastName, email, address, number, role_id]
  );
  return {
    hello: "HALO",
  };
}
async function updateUser(params) {
  const id = params.id;
  const firstName = params.firstName;
  const lastName = params.lastName;
  const role_id = params.role_id;
  const email = params.email;
  const address = params.address;
  const number = params.number;
  const data = await db.query(
    "UPDATE user SET  first_name =? , last_name= ?,  role_id= ?, address= ?, email= ?, phone_number= ? where id =?",
    [firstName, lastName, role_id, address, email, number, id]
  );
  return {
    work: "this is working",
  };
}
async function deleteUser(params) {
  const id = params.id;

  const data = await db.query("DELETE FROM user where id = ?", [id]);
  return {
    data,
  };
}
module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
