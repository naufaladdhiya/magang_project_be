const logger = require("../../utils/logger");
const VisiMisiModel = require("../../models/profile/visi-misi.model");
const {
  createVisiMisiValidation,
  updateVisiMisiValidation,
} = require("../../validations/profile.validation");

const postVisiMisi = async (req, res) => {
  const { error, value } = createVisiMisiValidation(req.body);
  if (error) {
    logger.error("Validation error: ", error);
    return res.status(400).send({ message: "Invalid input", data: {} });
  }

  try {
    const exitingVisiMisi = await VisiMisiModel.findOne({ title: value.title });
    if (exitingVisiMisi) {
      return res.status(400).json({ message: "VisiMisi already exists" });
    }

    await VisiMisiModel.create(value);

    logger.info("Create VisiMisi success");
    return res.status(201).send({
      message: "Create VisiMisi success",
      data: {},
    });
  } catch (error) {
    logger.error("Err: VisiMisi - create ", error);
    return res.status(500).send({ message: "Internal server error", data: {} });
  }
};

const getVisiMisi = async (req, res) => {
  try {
    const VisiMisi = await VisiMisiModel.find();
    return res.status(200).send({
      message: "Get VisiMisi success",
      data: VisiMisi,
    });
  } catch (error) {
    logger.error("Err: VisiMisi - get ", error);
    return res.status(500).send({ message: "Internal server error", data: {} });
  }
};

const getVisiMisiById = async (req, res) => {
  try {
    const VisiMisi = await VisiMisiModel.findById(req.params.id);
    return res.status(200).send({
      message: "Get VisiMisi success",
      data: VisiMisi,
    });
  } catch (error) {
    logger.error("Err: VisiMisi - get ", error);
    return res.status(500).send({ message: "Internal server error", data: {} });
  }
};

const updateVisiMisi = async (req, res) => {
  const { error, value } = updateVisiMisiValidation(req.body);

  if (error) {
    logger.error("Validation error: ", error);
    return res.status(400).send({ message: "Invalid input", data: {} });
  }

  try {
    await VisiMisiModel.findByIdAndUpdate(req.params.id, value);

    logger.info("Update VisiMisi success");
    return res.status(201).send({
      message: "Update VisiMisi success",
      data: {},
    });
  } catch (error) {
    logger.error("Err: VisiMisi - update ", error);
    return res.status(500).send({ message: "Internal server error", data: {} });
  }
};

const deleteVisiMisi = async (req, res) => {
  try {
    await VisiMisiModel.findByIdAndDelete(req.params.id);

    logger.info("Delete VisiMisi success");
    return res.status(201).send({
      message: "Delete VisiMisi success",
      data: {},
    });
  } catch (error) {
    logger.error("Err: VisiMisi - delete ", error);
    return res.status(500).send({ message: "Internal server error", data: {} });
  }
};

module.exports = {
  postVisiMisi,
  getVisiMisi,
  getVisiMisiById,
  updateVisiMisi,
  deleteVisiMisi,
};
