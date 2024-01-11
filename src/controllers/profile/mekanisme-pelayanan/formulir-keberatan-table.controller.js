const logger = require("../../../utils/logger");
const FormulirKeberatanModel = require("../../../models/profile/mekanisme-pelayanan/formulir-keberatan-table.model");
const {
  createFormulirKeberatanTableValidation,
  updateFormulirKeberatanTableValidation,
} = require("../../../validations/profile.validation");

const postFormulirKeberatanTable = async (req, res) => {
  const { error, value } = createFormulirKeberatanTableValidation(req.body);
  if (error) {
    logger.error("Validation error: ", error);
    return res.status(400).send({ message: "Invalid input", data: {} });
  }

  try {
    const exitingFormulirKeberatanTable = await FormulirKeberatanModel.findOne({
      jenis: value.jenis,
    });
    if (exitingFormulirKeberatanTable) {
      return res
        .status(400)
        .json({ message: "Formulir Keberatan Table already exists" });
    }

    await FormulirKeberatanModel.create(value);

    logger.info("Create Formulir Keberatan Table success");
    return res.status(201).send({
      message: "Create Formulir Keberatan Table success",
      data: {},
    });
  } catch (error) {
    logger.error("Err: FormulirKeberatanTable - create ", error);
    return res.status(500).send({ message: "Internal server error", data: {} });
  }
};

const getFormulirKeberatanTable = async (req, res) => {
  const { search } = req.query;
  try {
    const FormulirKeberatanTable = await FormulirKeberatanModel.find({
      jenis: { $regex: search, $options: "i" },
    });
    return res.status(200).send({
      message: "Get Formulir Keberatan Table success",
      data: FormulirKeberatanTable,
    });
  } catch (error) {
    logger.error("Err: Formulir Keberatan Table - get ", error);
    return res.status(500).send({ message: "Internal server error", data: {} });
  }
};

const getFormulirKeberatanTableById = async (req, res) => {
  try {
    const FormulirKeberatanTable = await FormulirKeberatanModel.findById(
      req.params.id
    );
    if (!FormulirKeberatanTable) {
      logger.error("Formulir Keberatan Table not found");
      return res
        .status(404)
        .send({ message: "Formulir Keberatan Table not found" });
    }

    return res.status(200).send({
      message: "Get Formulir Keberatan Table success",
      data: FormulirKeberatanTable,
    });
  } catch (error) {
    logger.error("Err: Formulir Keberatan Table - get ", error);
    return res.status(500).send({ message: "Internal server error", data: {} });
  }
};

const updateFormulirKeberatanTable = async (req, res) => {
  const { error, value } = updateFormulirKeberatanTableValidation(req.body);

  if (error) {
    logger.error("Validation error: ", error);
    return res.status(400).send({ message: "Invalid input", data: {} });
  }

  try {
    await FormulirKeberatanModel.findByIdAndUpdate(req.params.id, value);

    logger.info("Update Formulir Keberatan Table success");
    return res.status(201).send({
      message: "Update Formulir Keberatan Table success",
      data: {},
    });
  } catch (error) {
    logger.error("Err: Formulir Keberatan Table - update ", error);
    return res.status(500).send({ message: "Internal server error", data: {} });
  }
};

const deleteFormulirKeberatanTable = async (req, res) => {
  try {
    await FormulirKeberatanModel.findByIdAndDelete(req.params.id);

    logger.info("Delete Formulir Keberatan Table success");
    return res.status(201).send({
      message: "Delete Formulir Keberatan Table success",
      data: {},
    });
  } catch (error) {
    logger.error("Err: FormulirKeberatanTable - delete ", error);
    return res.status(500).send({ message: "Internal server error", data: {} });
  }
};

module.exports = {
  postFormulirKeberatanTable,
  getFormulirKeberatanTable,
  getFormulirKeberatanTableById,
  updateFormulirKeberatanTable,
  deleteFormulirKeberatanTable,
};
