const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const User = require('../models/UserModel');
require('dotenv').config();

const secret = process.env.ApiSecretKey;

const login = async (req, res) => {
  let user;
  const { userName, password } = req.body;
  User.findOne({ where: { userName } }).then(data => {
    if (!data) {
      return res.status(401).json({
        message: "User " + req.body.userName + " does not exist!"
      });
    }
    user = data;
    return bcrypt.compare(password, user.passwordHash);
  }).then(result => {
    if (!result) {
      return res.status(401).json({
        message: "Invalid credentials for " + user.email + "!"
      });
    }

    const token = jwt.sign({
      sub: user.id,
      name: user.fullName,
      email: user.useName,
      userId: user.id,
      role: user.role
    }, secret, { expiresIn: '1h' });

    res.status(200).json({
      token: token,
      email: user.userName,
      name: user.fullName,
    })
  }).catch(err => {
    return res.status(401).json({
      message: "Credenciales Invalidas!"
    });
  });
};

const getUser = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

const createUser = async (req, res) => {
  try {
    const { userName, password, fullName, cellPhone, apartment, role } = req.body;
    let passwordHash = await bcrypt.hash(password, 8);
    const user = await User.create({ userName, passwordHash, fullName, cellPhone, apartment, role, status: true });

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.query;
    const { userName, password, fullName, cellPhone, apartment, role, status } = req.body;
    let passwordHash = await bcrypt.hash(password, 8);
    let item = {
      userName,
      passwordHash,
      fullName,
      cellPhone,
      apartment,
      role,
      status
    };

    const result = await User.update(item, { where: { id } })
    if (result > 0) {
      let user = await User.findOne({ where: { id } });
      res.json(user);
    }
    else {
      res.json({ message: "No se actualizo el registro." });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await User.update({ status: false }, { where: { id } });
    if (result > 0) {
      res.json({ message: "Registro Eliminado." });
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
  login,
  getUser,
  createUser,
  deleteUser,
  updateUser
};
