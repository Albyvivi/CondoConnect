const express = require("express");
const router = express.Router();

const { login, getUser, createUser, updateUser, deleteUser } = require("../controllers/UserController");
const authMiddleware = require("../middleware/auth");

const { getBookings, createBooking, updateBooking, deleteBooking } = require("../controllers/BookingController");

const { getFeedbacks, createFeedback, updateFeedback, deleteFeedback } = require("../controllers/FeedbackController");

const { getVisitors, createVisitor, updateVisitor, deleteVisitor } = require("../controllers/VisitorController");

router.get("/account/login", login);
router.get("/users", authMiddleware, getUser);
router.post("/users", authMiddleware, createUser);
router.put("/users", authMiddleware, updateUser);
router.delete("/users/:id", authMiddleware, deleteUser);

router.get("/bookings", authMiddleware, getBookings);
router.post("/bookings", authMiddleware, createBooking);
router.put("/bookings", authMiddleware, updateBooking);
router.delete("/bookings/:id", authMiddleware, deleteBooking);

router.get("/feedbacks", authMiddleware, getFeedbacks);
router.post("/feedbacks", authMiddleware, createFeedback);
router.put("/feedbacks", authMiddleware, updateFeedback);
router.delete("/feedbacks/:id", authMiddleware, deleteFeedback);

router.get("/visitors", authMiddleware, getVisitors);
router.post("/visitors", authMiddleware, createVisitor);
router.put("/visitors", authMiddleware, updateVisitor);
router.delete("/visitors/:id", authMiddleware, deleteVisitor);

module.exports = router;