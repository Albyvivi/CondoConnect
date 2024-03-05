const express = require("express");
const router = express.Router();

const {
  getBookings,
  createBookings,
  updateBooking,
  deleteBooking,
} = require("../controllers/BookingController");

const { login, getUser, createUser, updateUser, deleteUser } = require("../controllers/UserController");
const authMiddleware = require("../middleware/auth");

router.get("/bookings", getBookings);
router.post("/bookings", createBookings);

router.get("/account/login", login);
router.get("/users", authMiddleware, getUser);
router.post("/users", authMiddleware, createUser);
router.put("/users", authMiddleware, updateUser);
router.delete("/users/:id", authMiddleware, deleteUser);

module.exports = router;