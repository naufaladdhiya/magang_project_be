const logger = require("../../../utils/logger");
const DasarHukumTableModel = require("../../../models/profile/dasar-hukum/dasar-hukum-table.model");
const {
  createDasarHukumTableValidation,
  updateDasarHukumTableValidation,
} = require("../../../validations/profile.validation");

const postDasarHukumTable = async (req, res) => {
  const { error, value } = createDasarHukumTableValidation(req.body);
  if (error) {
    logger.error("Validation error: ", error);
    return res.status(400).send({ message: "Invalid input", data: {} });
  }

  try {
    const exitingDasarHukumTable = await DasarHukumTableModel.findOne({
      jenis: value.jenis,
    });
    if (exitingDasarHukumTable) {
      return res
        .status(400)
        .json({ message: "Dasar Hukum Table already exists" });
    }

    await DasarHukumTableModel.create(value);

    logger.info("Create Dasar Hukum Table success");
    return res.status(201).send({
      message: "Create Dasar Hukum Table success",
      data: {},
    });
  } catch (error) {
    logger.error("Err: DasarHukumTable - create ", error);
    return res.status(500).send({ message: "Internal server error", data: {} });
  }
};

const getDasarHukumTable = async (req, res) => {
  const { search } = req.query;
  try {
    const DasarHukumTable = await DasarHukumTableModel.find({
      jenis: { $regex: search, $options: "i" },
    });
    return res.status(200).send({
      message: "Get Dasar Hukum Table success",
      data: DasarHukumTable,
    });
  } catch (error) {
    logger.error("Err: Dasar Hukum Table - get ", error);
    return res.status(500).send({ message: "Internal server error", data: {} });
  }
};

const getDasarHukumTableById = async (req, res) => {
  try {
    const DasarHukumTable = await DasarHukumTableModel.findById(req.params.id);
    if (!DasarHukumTable) {
      logger.error("Dasar Hukum Table not found");
      return res.status(404).send({ message: "Dasar Hukum Table not found" });
    }

    return res.status(200).send({
      message: "Get Dasar Hukum Table success",
      data: DasarHukumTable,
    });
  } catch (error) {
    logger.error("Err: Dasar Hukum Table - get ", error);
    return res.status(500).send({ message: "Internal server error", data: {} });
  }
};

const updateDasarHukumTable = async (req, res) => {
  const { error, value } = updateDasarHukumTableValidation(req.body);

  if (error) {
    logger.error("Validation error: ", error);
    return res.status(400).send({ message: "Invalid input", data: {} });
  }

  try {
    await DasarHukumTableModel.findByIdAndUpdate(req.params.id, value);

    logger.info("Update Dasar Hukum Table success");
    return res.status(201).send({
      message: "Update Dasar Hukum Table success",
      data: {},
    });
  } catch (error) {
    logger.error("Err: Dasar Hukum Table - update ", error);
    return res.status(500).send({ message: "Internal server error", data: {} });
  }
};

const deleteDasarHukumTable = async (req, res) => {
  try {
    await DasarHukumTableModel.findByIdAndDelete(req.params.id);

    logger.info("Delete Dasar Hukum Table success");
    return res.status(201).send({
      message: "Delete Dasar Hukum Table success",
      data: {},
    });
  } catch (error) {
    logger.error("Err: DasarHukumTable - delete ", error);
    return res.status(500).send({ message: "Internal server error", data: {} });
  }
};

module.exports = {
  postDasarHukumTable,
  getDasarHukumTable,
  getDasarHukumTableById,
  updateDasarHukumTable,
  deleteDasarHukumTable,
};
