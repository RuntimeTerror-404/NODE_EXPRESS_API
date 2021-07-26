import express from "express";
const router = express.Router();
import { v4 as uuidv4 } from "uuid";

let users = [];

// const students = [
//   {
//     name: "Eric Lensar",
//     age: 23,
//     college: "Michigan University",
//     program: "Gradute",
//   },
//   { name: "Samantha Stoser", age: 25, college: "Georgia Tech", program: "PHD" },
//   {
//     name: "Nishita Swaminathan",
//     age: 22,
//     college: "Columbia University",
//     program: "Gradute",
//   },
// ];

router.get("/", (req, res) => {
  res.send(users);
});

// add users in the database using POST method
router.post("/", (req, res) => {
  const user = req.body;
  const userWithId = { ...user, id: uuidv4() };
  users.push(userWithId);
  res.send(`user with the name : ${user.name} has been added to the database`);
});

// get user details using id parameter
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
});

// delete user using its id
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`user with id : ${id} has been deleted from database`);
});

// update user using id, PATCH method
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, country } = req.body;

  const user = users.find((user) => user.id === id);

  if (name) user.name = name;
  if (age) user.age = age;
  if (country) user.country = country;

  res.send(`user with id : ${id} has been updated`);
});

// router.get("/users", (req, res) => {
//   res.send(students);
// });

export default router;
