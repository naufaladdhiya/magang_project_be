const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const logger = require("../utils/logger");
const UserModel = require("../models/user.model");
const { JWT_SECRET } = require("../constants/config");
const { createUserValidation } = require("../validations/user.validation");

const register = async (req, res) => {
  const { error, value } = createUserValidation(req.body);

  if (error) {
    logger.error("Validation error: ", error);
    return res.status(400).send({ message: "Invalid input", data: {} });
  }

  try {
    const exitingUser = await UserModel.findOne({ email: value.email });
    if (exitingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    await UserModel.create(value);

    logger.info("Create user success");
    return res.status(201).send({
      message: "Create user success",
      data: {},
    });
  } catch (error) {
    logger.error("Err: user - create ", error);
    return res.status(500).send({ message: "Internal server error", data: {} });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const User = await UserModel.findOne({ email });
    if (!User) {
      logger.error("User not found");
      return res.status(400).send({ message: "User not found", data: {} });
    }

    const isMatch = await bcrypt.compare(password, User.password);

    if (!isMatch) {
      logger.error("Invalid login");
      return res.status(400).send({ message: "Invalid login", data: {} });
    }

    const token = jwt.sign({ id: User.id }, JWT_SECRET, { expiresIn: "1d" });

    return res.status(200).send({
      message: "Login success",
      data: {
        email: User.email,
        username: User.username,
        token,
      },
    });
  } catch (error) {
    logger.error("Err: user - login ", error);
    return res.status(500).send({ message: "Internal server error", data: {} });
  }
};

const getMe = async (req, res) => {
  try {
    const User = await UserModel.findById(req.body.user.id);

    if (!User) {
      return res.status(400).send({ message: "User not found", data: {} });
    }

    return res.status(200).send({
      message: "Get me success",
      data: {
        email: User.email,
        username: User.username,
      },
    });
  } catch (error) {
    logger.error("Err: user - get me ", error);
    return res.status(500).send({ message: "Internal server error", data: {} });
  }
};

module.exports = {
  register,
  login,
  getMe,
};
