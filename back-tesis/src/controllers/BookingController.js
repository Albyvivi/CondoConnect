const Booking = require('../models/BookingModel');

const getBookings = async (req, res) => {
  try {
    const result = await Booking.findAll();
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

const createBooking = async (req, res) => {
  try {
    const { userid, area, date, startTime, endTime, description } = req.body;
    const result = await Booking.create({ userid, area, date, startTime, endTime, description });

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

const updateBooking = async (req, res) => {
  try {
    const { id } = req.query;
    const { userId, area, date, startTime, endTime, description } = req.body;
    let booking = await Booking.findOne({ where: { id } });
    if (!booking) {
      throw new Error("No existe el registro a actualizar.");
    }

    const result = await Booking.update({ userId, area, date, startTime, endTime, description }, { where: { id: id } });
    if (result > 0) {
      booking = await Booking.findOne({ where: { id } });
      res.json({ message: "Registro actualizado.", data: booking });
    }
    else {
      res.json({ message: "No se actualizo el registro." });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    let booking = await Booking.findOne({ where: { id } });
    if (!booking) {
      throw new Error("No existe el registro a eliminar.");
    }
    const result = await Booking.destroy({ where: { id } });
    if (result > 0) {
      res.json({ message: "Registro Eliminado.", data: booking });
    }
    else {
      res.json({ message: "No se elimino el registro." });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

module.exports = {
  getBookings,
  createBooking,
  updateBooking,
  deleteBooking
};
