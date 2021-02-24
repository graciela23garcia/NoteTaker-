const fs = require("fs");
const notes = fs.readFileSync("./db/db.json");
let jsonNotes = JSON.parse(notes);
let db = require("../db/db.json");
console.log(db);

module.exports = (app) => {
  // Get all notes
  app.get("/api/notes", (req, res) => {
    res.json(jsonNotes);
  });
  