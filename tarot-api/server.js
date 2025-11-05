const express = require("express");
const majorArcana = require("./cards.js");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get("/api/cards", (req, res) => {
  res.json(majorArcana);
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
