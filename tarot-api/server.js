const express = require("express");
const majorArcana = require("./cards.js");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
app.use("/assets", express.static("tarot-api/assets"));

app.use(express.static("tarot-api/assets"));

app.get("/api/cards", (req, res) => {
  res.json(majorArcana);
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
