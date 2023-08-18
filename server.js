// server.js

const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "multi_login_db",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database:", err);
    return;
  }
  console.log("Connected to MySQL database!");
});

// API endpoint untuk login
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  // Proses autentikasi pengguna berdasarkan data di tabel users di database
  const sqlQuery = "SELECT * FROM users WHERE username = ? AND password = ?";
  db.query(sqlQuery, [username, password], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (result.length === 0) {
        res.status(401).json({ message: "Invalid username or password" });
      } else {
        res.status(200).json(result[0]);
      }
    }
  });
});

// API endpoint untuk mendaftarkan pengguna baru
app.post("/api/register", (req, res) => {
  const { username, email, password, role } = req.body;
  // Proses pendaftaran pengguna ke dalam tabel users di database
  const sqlQuery =
    "INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)";
  db.query(sqlQuery, [username, email, password, role], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json({ message: "User registered successfully!" });
    }
  });
});

// API endpoint untuk mendapatkan daftar pengguna
app.delete("/api/users/delete/:id", (req, res) => {
  const userId = req.params.id;
  const sqlQuery = "DELETE FROM users WHERE `users`.`id` = ?";
  db.query(sqlQuery, userId, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json({ message: "User deleted successfully!" });
    }
  });
});

app.post("/api/vote", (req, res) => {
  const { username } = req.body;
  // Proses pendaftaran pengguna ke dalam tabel users di database
  const sqlQuery = "INSERT INTO usersr (username) VALUES (?)";
  db.query(sqlQuery, [username], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json({ message: "User registered successfully!" });
    }
  });
});
app.get("/api/tampilkan", (req, res) => {
  // Proses pengambilan data pengguna dari tabel users di database
  const sqlQuery = "SELECT * FROM users";
  db.query(sqlQuery, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(result);
    }
  });
});

app.get("/api/userss", (req, res) => {
  // Proses pengambilan data pengguna dari tabel usersr di database
  const sqlQuery = "SELECT * FROM usersr";
  db.query(sqlQuery, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(result);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// API endpoint untuk menghapus
// app.delete('/api/users/delete', (req, res) => { kita bisa api point 40
//   const userId = req.params.id;
//   const sqlQuery = 'DELETE FROM users WHERE id = ?';
//   db.query(sqlQuery, userId, (err, result) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).json(result);
//     }
//   });
// });
// app.delete('/api/users/delete/:id', (req, res) => {
//   const userId = req.params.id;
//   const sqlQuery = 'DELETE FROM users WHERE id = ?';
//   db.query(sqlQuery, userId, (err, result) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).json({ message: 'User deleted successfully!' });
//     }
//   });
// });

// API endpoint untuk mendaftarkan yang dipilih
