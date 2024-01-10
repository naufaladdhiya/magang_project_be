const logger = require("../../utils/logger");
const LinkPPIDPelaksanaModel = require("../../models/profile/link-ppid-pelaksana.model");
const {
  createLinkPPIDPelaksanaValidation,
  updateLinkPPIDPelaksanaValidation,
} = require("../../validations/profile.validation");

const postLinkPPIDPelaksana = async (req, res) => {
  const { error, value } = createLinkPPIDPelaksanaValidation(req.body);
  if (error) {
    logger.error("Validation error: ", error);
    return res.status(400).send({ message: "Invalid input", data: {} });
  }

  try {
    const exitingLinkPPIDPelaksana = await LinkPPIDPelaksanaModel.findOne({
      title: value.title,
    });
    if (exitingLinkPPIDPelaksana) {
      return res
        .status(400)
        .json({ message: "Link PPID Pelaksana already exists" });
    }

    await LinkPPIDPelaksanaModel.create(value);

    logger.info("Create Link PPID Pelaksana success");
    return res.status(201).send({
      message: "Create Link PPID Pelaksana success",
      data: {},
    });
  } catch (error) {
    logger.error("Err: LinkPPIDPelaksana - create ", error);
    return res.status(500).send({ message: "Internal server error", data: {} });
  }
};

const getLinkPPIDPelaksana = async (req, res) => {
  const { search } = req.query;
  try {
    const LinkPPIDPelaksana = await LinkPPIDPelaksanaModel.find({
      title: { $regex: search, $options: "i" },
    });
    return res.status(200).send({
      message: "Get Link PPID Pelaksana success",
      data: LinkPPIDPelaksana,
    });
  } catch (error) {
    logger.error("Err: Link PPID Pelaksana - get ", error);
    return res.status(500).send({ message: "Internal server error", data: {} });
  }
};

const getLinkPPIDPelaksanaById = async (req, res) => {
  try {
    const LinkPPIDPelaksana = await LinkPPIDPelaksanaModel.findById(
      req.params.id
    );
    if (!LinkPPIDPelaksana) {
      logger.error("Link PPID Pelaksana not found");
      return res.status(404).send({ message: "Link PPID Pelaksana not found" });
    }

    return res.status(200).send({
      message: "Get Link PPID Pelaksana success",
      data: LinkPPIDPelaksana,
    });
  } catch (error) {
    logger.error("Err: Link PPID Pelaksana - get ", error);
    return res.status(500).send({ message: "Internal server error", data: {} });
  }
};

const updateLinkPPIDPelaksana = async (req, res) => {
  const { error, value } = updateLinkPPIDPelaksanaValidation(req.body);

  if (error) {
    logger.error("Validation error: ", error);
    return res.status(400).send({ message: "Invalid input", data: {} });
  }

  try {
    await LinkPPIDPelaksanaModel.findByIdAndUpdate(req.params.id, value);

    logger.info("Update Link PPID Pelaksana success");
    return res.status(201).send({
      message: "Update Link PPID Pelaksana success",
      data: {},
    });
  } catch (error) {
    logger.error("Err: Link PPID Pelaksana - update ", error);
    return res.status(500).send({ message: "Internal server error", data: {} });
  }
};

const deleteLinkPPIDPelaksana = async (req, res) => {
  try {
    await LinkPPIDPelaksanaModel.findByIdAndDelete(req.params.id);

    logger.info("Delete Link PPID Pelaksana success");
    return res.status(201).send({
      message: "Delete Link PPID Pelaksana success",
      data: {},
    });
  } catch (error) {
    logger.error("Err: LinkPPIDPelaksana - delete ", error);
    return res.status(500).send({ message: "Internal server error", data: {} });
  }
};

module.exports = {
  postLinkPPIDPelaksana,
  getLinkPPIDPelaksana,
  getLinkPPIDPelaksanaById,
  updateLinkPPIDPelaksana,
  deleteLinkPPIDPelaksana,
};
