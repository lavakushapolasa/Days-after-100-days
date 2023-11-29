const express = require(express);

const addDays = require("date-fns/addDays");

const app = express();

app.get("/", (request, response) => {
  const today = new Date();
  const result = addDays(
    new Date(today.getFullYear(), today.getMonth(), today.getDay()),
    100
  );
  response.send(
    `${result.getDay()}/${result.getMonth() + 1}/${result.getFullYear()}`
  );
});

module.exports = app;
