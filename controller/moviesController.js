const connection = require("../database/database_connection");

const index = (req, res) => {
  const sql = "SELECT * FROM movies";
  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: "Database query failed" });
    console.log(results);
    res.json(results);
  });
};

const show = (req, res) => {
  const id = Number(req.params.id);
  const sql = "SELECT * FROM movies WHERE id = ?";

  connection.query(sql, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: true, message: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: true, message: "404 NOT FOUND" });
    }

    res.json(results[0]);
  });
};

const store = (req, res) => {};

const update = (req, res) => {};

const modify = (req, res) => {};

const destroy = (req, res) => {};

module.exports = { index, show, store, update, modify, destroy };
