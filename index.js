import express from "express";
import bodyParser from "body-parser";

import userRoute from "./routes/users.js";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use("/users", userRoute);

// we have to have atleast one route to avoid any error and initialize express app
app.get("/", (req, res) => {
  console.log("TEST");
  res.send("Welcome to the Homepage");
});

app.listen(PORT, () =>
  console.log(`server is running at the port: http://localhost:${PORT}`)
);

/*
GET => /users/ find all users
GET => /users/:id find user details
POST => /users/ create a user
DELETE => /users/:id delete a user
PATCH => /users/:id update a user
*/
