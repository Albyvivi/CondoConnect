const { Pool } = require("pg");

const pool = new Pool({
  host: "postgres",
  user: "postgres",
  password: "admin",
  database: "condoconnect",
  port: "5432",
});

const getUser = async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM user");
    res.json(response.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

const createUser = async (req, res) => {
  const { id, user, fullName, password, cellphone, block, apartment, rol } =
    req.body;
  pool.query(
    "INSERT INTO booking (id, user, fullName, password, cellphone, block, apartment, rol) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
    [id, user, fullName, password, cellphone, block, apartment, rol],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send(`User added with ID: ${result.insertId}`);
    }
  );
};

module.exports = {
  getUser,
  createUser,
};
