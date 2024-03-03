const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "12345",
  database: "db_condoconnect",
  port: "5432",
});

const getBookings = async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM bookings");
    res.json(response.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

const createBookings = async (req, res) => {
  /*  const { area, date, start_time, end_time, desc } = req.body;
  pool.query('INSERT INTO booking ('area, date, start_time, end_time, desc') VALUES ())*/
};

module.exports = {
  getBookings,
  createBookings,
};
