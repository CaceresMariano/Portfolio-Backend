const express = require("express");
const cors = require("cors");
const app = express();
const about = require("./JSON/About.json");
const portfolio = require("./JSON/Portfolio.json");

app.use(cors());
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server on: ${port}`);
});

app.get("/about", (req, resp) => {
  resp.json(about);
});
app.get("/portfolio", (req, resp) => {
    resp.json(portfolio)
});
