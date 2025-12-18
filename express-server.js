import express from "express";
import mydb from "./myDatabase.js";
import { data } from "react-router-dom";
const port = 3000;
const app = express();

const isDev = process.env.NODE_ENV !== "production";

app.use((req, res, next) => {
  let csp =
    "default-src 'self'; " +
    "img-src 'self' data:; " +
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
    "font-src 'self' https://fonts.gstatic.com; " +
    "connect-src 'self';";

  if (isDev) {
    csp += " script-src 'self' 'unsafe-inline' 'unsafe-eval';";
  } else {
    csp += " script-src 'self';"; // safer for production
  }

  res.setHeader("Content-Security-Policy", csp);
  next();
});

app.use(express.json());

//endpoints
app.post("/create-account", (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      error: "must fill all fields",
    });
  }

  let datas = [];
  datas.push(username, email, password);

  mydb.query(
    "insert into users (username, email, password) values (?, ?, ?)",
    datas,
    (error, queryResults) => {
      if (error) {
        return res.status(500).json({
          error: "there is an error with the data",
        });
      }

      res.status(200).json({
        message: "user successfully added",
        id: queryResults.insertId,
      });
    }
  );
});

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`The express server started at port: ${port}`);
});
