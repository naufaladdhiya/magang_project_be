const logger = require("../../../utils/logger");
const { storeImage } = require("../../../utils/helper");
const UpayaTidakDitanggapiModel = require("../../../models/profile/mekanisme-pelayanan/upaya-tidak-ditanggapi.model");

const postUpayaTidakDitanggapi = async (req, res) => {
  let { title, description, tata_cara } = req.body;

  try {
    const exitingUpayaTidakDitanggapi = await UpayaTidakDitanggapiModel.findOne(
      {
        title,
      }
    );
    if (exitingUpayaTidakDitanggapi) {
      logger.error("title already exists");
      return res.status(400).send({ message: "title already exists" });
    }

    const imgFile = req.file;

    if (!imgFile) {
      logger.error("Image not found");
      return res.status(400).send({ message: "Image not found" });
    }

    const img_string = await storeImage(imgFile);

    const informasiData = await UpayaTidakDitanggapiModel.create({
      title,
      description,
      tata_cara,
      img_string,
    });

    logger.info("Create upaya tidak ditanggapi success");
    return res.status(201).send({
      message: "Create upaya tidak ditanggapi success",
      data: {
        id: informasiData.id,
        title: informasiData.title,
        description: informasiData.description,
        tata_cara: informasiData.tata_cara,
        img_string: informasiData.img_string,
      },
    });
  } catch (error) {
    logger.error("Err: upaya tidak ditanggapi  - create ", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

const getUpayaTidakDitanggapi = async (req, res) => {
  try {
    const DataUpayaTidakDitanggapi = await UpayaTidakDitanggapiModel.find();
    return res.status(200).send({
      message: "Get upaya tidak ditanggapi success",
      data: DataUpayaTidakDitanggapi,
    });
  } catch (error) {
    logger.error("Err: upaya tidak ditanggapi - get ", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

const getUpayaTidakDitanggapiById = async (req, res) => {
  try {
    const DataUpayaTidakDitanggapi = await UpayaTidakDitanggapiModel.findById(
      req.params.id
    );
    if (!DataUpayaTidakDitanggapi) {
      logger.error("Upaya tidak ditanggapi not found");
      return res
        .status(404)
        .send({ message: "Upaya tidak ditanggapi not found" });
    }

    return res.status(200).send({
      message: "Get upaya tidak ditanggapi success",
      data: DataUpayaTidakDitanggapi,
    });
  } catch (error) {
    logger.error("Err: upaya tidak ditanggapi - get ", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

const updateUpayaTidakDitanggapi = async (req, res) => {
  let { title, description, tata_cara } = req.body;

  try {
    const DataUpayaTidakDitanggapi = await UpayaTidakDitanggapiModel.findById(
      req.params.id
    );
    if (!DataUpayaTidakDitanggapi)
      return res
        .status(404)
        .send({ message: "Upaya tidak ditanggapi not found" });

    const imgFile = req.file;

    if (!imgFile) {
      logger.error("Image not found");
      return res.status(400).send({ message: "Image not found" });
    }

    const img_string = await storeImage(imgFile);

    await UpayaTidakDitanggapiModel.findByIdAndUpdate(req.params.id, {
      title,
      description,
      tata_cara,
      img_string,
    });

    logger.info("Update upaya tidak ditanggapi success");
    return res.status(201).send({
      message: "Update upaya tidak ditanggapi success",
      data: {},
    });
  } catch (error) {
    logger.error("Err: upaya tidak ditanggapi - update ", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

const deleteUpayaTidakDitanggapi = async (req, res) => {
  try {
    await UpayaTidakDitanggapiModel.deleteMany();

    logger.info("Delete upaya tidak ditanggapi success");
    return res.status(201).send({
      message: "Delete upaya tidak ditanggapi success",
      data: {},
    });
  } catch (error) {
    logger.error("Err: upaya tidak ditanggapi - delete ", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = {
  postUpayaTidakDitanggapi,
  getUpayaTidakDitanggapi,
  getUpayaTidakDitanggapiById,
  updateUpayaTidakDitanggapi,
  deleteUpayaTidakDitanggapi,
};
