const Feedback = require('../models/FeedbackModel');

const getFeedbacks = async (req, res) => {
  try {
    const result = await Feedback.findAll();
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

const createFeedback = async (req, res) => {
  try {
    const { userId, subject, description } = req.body;
    const result = await Feedback.create({ userId, subject, description });

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

const updateFeedback = async (req, res) => {
  try {
    const { id } = req.query;
    const { userId, subject, description } = req.body;
    let feedback = await Feedback.findOne({ where: { id } });
    if (!feedback) {
      throw new Error("No existe el registro a actualizar.");
    }

    const result = await Feedback.update({ userId, subject, description }, { where: { id: id } });
    if (result > 0) {
      feedback = await Feedback.findOne({ where: { id } });
      res.json({ message: "Registro actualizado.", data: feedback });
    }
    else {
      res.json({ message: "No se actualizo el registro." });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

const deleteFeedback = async (req, res) => {
  try {
    const { id } = req.params;
    let feedback = await Feedback.findOne({ where: { id } });
    if (!feedback) {
      throw new Error("No existe el registro a eliminar.");
    }
    const result = await Feedback.destroy({ where: { id } });
    if (result > 0) {
      res.json({ message: "Registro Eliminado.", data: feedback });
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
  getFeedbacks,
  createFeedback,
  updateFeedback,
  deleteFeedback
};
