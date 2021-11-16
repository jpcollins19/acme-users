const express = require("express");
const app = express();
const path = require("path");
const morgan = require(`morgan`);

app.use(morgan(`dev`));
app.use("/dist", express.static(path.join(__dirname, "dist")));

app.get("/", (req, res, next) =>
  res.sendFile(path.join(__dirname, "index.html"))
);

const port = process.env.PORT || 1117;

app.listen(port, () => console.log(`listening on port ${port}`));
