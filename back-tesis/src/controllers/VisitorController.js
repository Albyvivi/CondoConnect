const Visitor = require('../models/VisitorModel');

const getVisitors = async (req, res) => {
  try {
    const result = await Visitor.findAll();
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

const createVisitor = async (req, res) => {
  try {
    const { userId, visitorType, time, parkingSlot, description } = req.body;
    const result = await Visitor.create({ userId, visitorType, time, parkingSlot, description });

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

const updateVisitor = async (req, res) => {
  try {
    const { id } = req.query;
    const { userId, visitorType, time, parkingSlot, description } = req.body;
    let visitor = await Visitor.findOne({ where: { id } });
    if (!visitor) {
      throw new Error("No existe el registro a actualizar.");
    }

    const result = await Visitor.update({ userId, visitorType, time, parkingSlot, description }, { where: { id: id } });
    if (result > 0) {
      visitor = await Visitor.findOne({ where: { id } });
      res.json({ message: "Registro actualizado.", data: visitor });
    }
    else {
      res.json({ message: "No se actualizo el registro." });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

const deleteVisitor = async (req, res) => {
  try {
    const { id } = req.params;
    let visitor = await Visitor.findOne({ where: { id } });
    if (!visitor) {
      throw new Error("No existe el registro a eliminar.");
    }
    const result = await Visitor.destroy({ where: { id } });
    if (result > 0) {
      res.json({ message: "Registro Eliminado.", data: visitor });
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
  getVisitors,
  createVisitor,
  updateVisitor,
  deleteVisitor
};
