const { Router } = require("express");
const router = Router();

const {
  getBookings,
  createBookings,
  updateBooking,
  deleteBooking,
} = require("../controllers/BookingController");

const { getUser, createUser } = require("../controllers/UserController");

router.get("/bookings", getBookings);
router.post("/bookings", createBookings);
router.get("/users", getUser);
router.post("/users", createUser);
/*router.put("/bookings/:id", updateBooking);*/
/*router.delete("/bookings/:id", deleteBooking);*/

module.exports = router;
