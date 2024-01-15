import express from "express";
import cors from "cors";
import { Users } from "./users.js";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  const query = req.query.q;

  const keys = ['first_name', 'last_name', 'email'];

  function search(data) {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  }

  res.json(search(Users).splice(0, 10));
});

app.listen(5000, () => {
  console.log("Running server on port 500");
});