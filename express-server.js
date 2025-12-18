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

  mydb.query(
    "select username from Users where username = ?",
    [username],
    (error, queryResults) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          error: "there is something wrong",
        });
      }

      if (queryResults.length > 0) {
        return res.status(401).json({
          error: "user already exists!",
        });
      }

      const data = [username, email, password];
      mydb.query(
        "insert into Users (username, email, password) values (?, ?, ?)",
        data,
        (error, queryResults) => {
          if (error) {
            console.log(error);
            return res.status(500).json({
              message: "database error",
            });
          }

          res.status(200).json({
            message: "user successfully added",
            id: queryResults.insertId,
          });
        }
      );
    }
  );
});

app.post("/login-account", (req, res) => {
  const { username, password } = req.body;

  mydb.query(
    "select password from Users where username = ?",
    [username],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({
          error: "database error",
        });
      }

      if (results.length === 0) {
        return res.status(401).json({
          message: "user not found",
        });
      }

      const user = results[0];

      if (password != user.password) {
        return res.status(401).json({
          error: "login failed",
        });
      }

      res.status(200).json({
        message: "user successfully login",
      });
    }
  );
});

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`The express server started at port: ${port}`);
});
