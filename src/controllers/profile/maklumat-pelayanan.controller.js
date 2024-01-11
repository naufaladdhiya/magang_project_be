const logger = require("../../utils/logger");
const { storeImage } = require("../../utils/helper");
const MaklumatPelayananModel = require("../../models/profile/maklumat-pelayanan.model");

const postMaklumatPelayanan = async (req, res) => {
  let { title } = req.body;

  try {
    const exitingMaklumatPelayanan = await MaklumatPelayananModel.findOne({
      title,
    });
    if (exitingMaklumatPelayanan) {
      logger.error("title already exists");
      return res.status(400).send({ message: "title already exists" });
    }

    const imgFile = req.file;

    if (!imgFile) {
      logger.error("Image not found");
      return res.status(400).send({ message: "Image not found" });
    }

    const img_string = await storeImage(imgFile);

    if (!title) title = "";

    const titleData = await MaklumatPelayananModel.create({
      title,
      img_string,
    });

    logger.info("Create maklumat pelayanan success");
    return res.status(201).send({
      message: "Create maklumat pelayanan success",
      data: {
        id: titleData.id,
        title: titleData.title,
        img_string: titleData.img_string,
      },
    });
  } catch (error) {
    logger.error("Err: title - create ", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

const getMaklumatPelayanan = async (req, res) => {
  try {
    const DataMaklumatPelayanan = await MaklumatPelayananModel.find();
    return res.status(200).send({
      message: "Get maklumat pelayanan success",
      data: DataMaklumatPelayanan,
    });
  } catch (error) {
    logger.error("Err: DataMaklumatPelayanan - get ", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

const getMaklumatPelayananById = async (req, res) => {
  try {
    const DataMaklumatPelayanan = await MaklumatPelayananModel.findById(
      req.params.id
    );
    if (!DataMaklumatPelayanan)
      return res
        .status(404)
        .send({ message: "DataMaklumatPelayanan not found" });

    return res.status(200).send({
      message: "Get DataMaklumatPelayanan success",
      data: DataMaklumatPelayanan,
    });
  } catch (error) {
    logger.error("Err: DataMaklumatPelayanan - get ", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

const updateMaklumatPelayanan = async (req, res) => {
  try {
    const findData = await MaklumatPelayananModel.findById(req.params.id);
    if (!findData) {
      logger.error("DataMaklumatPelayanan not found");
      return res
        .status(404)
        .send({ message: "DataMaklumatPelayanan not found" });
    }

    const imgFile = req.file;

    if (!imgFile) {
      logger.error("Image not found");
      return res.status(400).send({ message: "Image not found" });
    }

    const img_string = await storeImage(imgFile);

    await MaklumatPelayananModel.findByIdAndUpdate(req.params.id, {
      img_string,
    });

    logger.info("Update DataMaklumatPelayanan success");
    return res.status(201).send({
      message: "Update DataMaklumatPelayanan success",
      data: {},
    });
  } catch (error) {
    logger.error("Err: DataMaklumatPelayanan - update ", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

const deleteMaklumatPelayanan = async (req, res) => {
  try {
    await MaklumatPelayananModel.findByIdAndDelete(req.params.id);

    logger.info("Delete DataMaklumatPelayanan success");
    return res.status(201).send({
      message: "Delete DataMaklumatPelayanan success",
      data: {},
    });
  } catch (error) {
    logger.error("Err: DataMaklumatPelayanan - delete ", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = {
  postMaklumatPelayanan,
  getMaklumatPelayanan,
  getMaklumatPelayananById,
  updateMaklumatPelayanan,
  deleteMaklumatPelayanan,
};
