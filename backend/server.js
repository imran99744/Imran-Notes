const express = require("express");
const notes = require("./data/notes.js");
const dotenv = require("dotenv");

const app = express();

app.get("/", (req, res) => {
  res.send("Your API is up and running");
});

app.get("/api/notes", (req, res) => {
  res.send(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`Server is running ${PORT}`));
