const logger = require("../../../utils/logger");
const DasarHukumFileModel = require("../../../models/profile/dasar-hukum/dasar-hukum-file.model");
const {
  createDasarHukumFileValidation,
  updateDasarHukumFileValidation,
} = require("../../../validations/profile.validation");

const postDasarHukumFile = async (req, res) => {
  const { error, value } = createDasarHukumFileValidation(req.body);
  if (error) {
    logger.error("Validation error: ", error);
    return res.status(400).send({ message: "Invalid input", data: {} });
  }

  try {
    const exitingDasarHukumFile = await DasarHukumFileModel.findOne({
      title: value.title,
    });
    if (exitingDasarHukumFile) {
      return res
        .status(400)
        .json({ message: "Dasar Hukum File already exists" });
    }

    await DasarHukumFileModel.create(value);

    logger.info("Create Dasar Hukum File success");
    return res.status(201).send({
      message: "Create Dasar Hukum File success",
      data: {},
    });
  } catch (error) {
    logger.error("Err: DasarHukumFile - create ", error);
    return res.status(500).send({ message: "Internal server error", data: {} });
  }
};

const getDasarHukumFile = async (req, res) => {
  const { search } = req.query;
  try {
    const DasarHukumFile = await DasarHukumFileModel.find({
      title: { $regex: search, $options: "i" },
    });
    return res.status(200).send({
      message: "Get Dasar Hukum File success",
      data: DasarHukumFile,
    });
  } catch (error) {
    logger.error("Err: Dasar Hukum File - get ", error);
    return res.status(500).send({ message: "Internal server error", data: {} });
  }
};

const getDasarHukumFileById = async (req, res) => {
  try {
    const DasarHukumFile = await DasarHukumFileModel.findById(req.params.id);
    if (!DasarHukumFile) {
      logger.error("Dasar Hukum File not found");
      return res.status(404).send({ message: "Dasar Hukum File not found" });
    }

    return res.status(200).send({
      message: "Get Dasar Hukum File success",
      data: DasarHukumFile,
    });
  } catch (error) {
    logger.error("Err: Dasar Hukum File - get ", error);
    return res.status(500).send({ message: "Internal server error", data: {} });
  }
};

const updateDasarHukumFile = async (req, res) => {
  const { error, value } = updateDasarHukumFileValidation(req.body);

  if (error) {
    logger.error("Validation error: ", error);
    return res.status(400).send({ message: "Invalid input", data: {} });
  }

  try {
    await DasarHukumFileModel.findByIdAndUpdate(req.params.id, value);

    logger.info("Update Dasar Hukum File success");
    return res.status(201).send({
      message: "Update Dasar Hukum File success",
      data: {},
    });
  } catch (error) {
    logger.error("Err: Dasar Hukum File - update ", error);
    return res.status(500).send({ message: "Internal server error", data: {} });
  }
};

const deleteDasarHukumFile = async (req, res) => {
  try {
    await DasarHukumFileModel.findByIdAndDelete(req.params.id);

    logger.info("Delete Dasar Hukum File success");
    return res.status(201).send({
      message: "Delete Dasar Hukum File success",
      data: {},
    });
  } catch (error) {
    logger.error("Err: DasarHukumFile - delete ", error);
    return res.status(500).send({ message: "Internal server error", data: {} });
  }
};

module.exports = {
  postDasarHukumFile,
  getDasarHukumFile,
  getDasarHukumFileById,
  updateDasarHukumFile,
  deleteDasarHukumFile,
};
