const logger = require("../../utils/logger");
const PPIDModel = require("../../models/profile/ppid.model");
const {
  createPPIDValidation,
  updatePPIDValidation,
} = require("../../validations/profile.validation");

const postPPID = async (req, res) => {
  const { error, value } = createPPIDValidation(req.body);
  if (error) {
    logger.error("Validation error: ", error);
    return res.status(400).send({ message: "Invalid input", data: {} });
  }

  try {
    const exitingPPID = await PPIDModel.findOne({ title: value.title });
    if (exitingPPID) {
      return res.status(400).json({ message: "PPID already exists" });
    }

    await PPIDModel.create(value);

    logger.info("Create PPID success");
    return res.status(201).send({
      message: "Create PPID success",
      data: {},
    });
  } catch (error) {
    logger.error("Err: PPID - create ", error);
    return res.status(500).send({ message: "Internal server error", data: {} });
  }
};

const getPPID = async (req, res) => {
  try {
    const PPID = await PPIDModel.find();
    return res.status(200).send({
      message: "Get PPID success",
      data: PPID,
    });
  } catch (error) {
    logger.error("Err: PPID - get ", error);
    return res.status(500).send({ message: "Internal server error", data: {} });
  }
};

const getPPIDById = async (req, res) => {
  try {
    const PPID = await PPIDModel.findById(req.params.id);
    if (!PPID) return res.status(404).send({ message: "PPID not found" });

    return res.status(200).send({
      message: "Get PPID success",
      data: PPID,
    });
  } catch (error) {
    logger.error("Err: PPID - get ", error);
    return res.status(500).send({ message: "Internal server error", data: {} });
  }
};

const updatePPID = async (req, res) => {
  const { error, value } = updatePPIDValidation(req.body);

  if (error) {
    logger.error("Validation error: ", error);
    return res.status(400).send({ message: "Invalid input", data: {} });
  }

  try {
    await PPIDModel.findByIdAndUpdate(req.params.id, value);

    logger.info("Update PPID success");
    return res.status(201).send({
      message: "Update PPID success",
      data: {},
    });
  } catch (error) {
    logger.error("Err: PPID - update ", error);
    return res.status(500).send({ message: "Internal server error", data: {} });
  }
};

const deletePPID = async (req, res) => {
  try {
    await PPIDModel.findByIdAndDelete(req.params.id);

    logger.info("Delete PPID success");
    return res.status(201).send({
      message: "Delete PPID success",
      data: {},
    });
  } catch (error) {
    logger.error("Err: PPID - delete ", error);
    return res.status(500).send({ message: "Internal server error", data: {} });
  }
};

module.exports = {
  postPPID,
  getPPID,
  getPPIDById,
  updatePPID,
  deletePPID,
};
