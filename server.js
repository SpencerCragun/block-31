// TODO: this file :)
const express = require("express");
const app = express();
const PORT = 3000;
const employees = require("./employees")



app.get("/", (req, res) => {
  res.send("Hello Employees!")
})

app.get("/employees", (req, res, next) => {
  res.send(employees)
})

app.get("/employees/random", (req, res, next) => {
  const i = Math.floor(Math.random() * employees.length);
  res.json(employees[i])
})

app.get("/employees/:id", (req, res, next) => {
  const { id } = req.params;
  if (id < 0 || id >= employees.length) {
    res.status(404).send("Employee not found")
  }  else {
    res.json(employees[id]);
  }
})



app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})