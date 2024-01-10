const logger = require("../../../utils/logger");
const { storeImage } = require("../../../utils/helper");
const MekanismePelayananInformasiPublik = require("../../../models/profile/mekanisme-pelayanan/informasi-publik.model");

const postMekanismePelayanan = async (req, res) => {
  let { title, subtitle, subtitle_link } = req.body;

  try {
    const exitingMekanismePelayanan =
      await MekanismePelayananInformasiPublik.findOne({
        subtitle,
      });
    if (exitingMekanismePelayanan) {
      logger.error("subtitle already exists");
      return res.status(400).send({ message: "subtitle already exists" });
    }

    const imgFile = req.file;

    if (!imgFile) {
      logger.error("Image not found");
      return res.status(400).send({ message: "Image not found" });
    }

    const img_string = await storeImage(imgFile);

    if (!title) title = "";

    const informasiData = await MekanismePelayananInformasiPublik.create({
      title,
      subtitle,
      subtitle_link,
      img_string,
    });

    logger.info("Create mekanisme pelayanan informasi publik success");
    return res.status(201).send({
      message: "Create mekanisme pelayanan informasi publik success",
      data: {
        id: informasiData.id,
        title: informasiData.title,
        subtitle: informasiData.subtitle,
        subtitle_link: informasiData.subtitle_link,
        img_string: informasiData.img_string,
      },
    });
  } catch (error) {
    logger.error("Err: mekanisme pelayanan  - create ", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

const getMekanismePelayanan = async (req, res) => {
  try {
    const DataMekanismePelayanan =
      await MekanismePelayananInformasiPublik.find();
    return res.status(200).send({
      message: "Get mekanisme pelayanan informasi publik success",
      data: DataMekanismePelayanan,
    });
  } catch (error) {
    logger.error("Err: DataMekanismePelayanan - get ", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

const getMekanismePelayananById = async (req, res) => {
  try {
    const DataMekanismePelayanan =
      await MekanismePelayananInformasiPublik.findById(req.params.id);
    if (!DataMekanismePelayanan)
      return res.status(404).send({ message: "Mekanisme pelayanan not found" });

    return res.status(200).send({
      message: "Get mekanisme pelayanan informasi publik success",
      data: DataMekanismePelayanan,
    });
  } catch (error) {
    logger.error("Err: DataMekanismePelayanan - get ", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

const updateMekanismePelayanan = async (req, res) => {
  let { title, subtitle, subtitle_link } = req.body;

  try {
    const DataMekanismePelayanan =
      await MekanismePelayananInformasiPublik.findById(req.params.id);
    if (!DataMekanismePelayanan)
      return res.status(404).send({ message: "Mekanisme pelayanan not found" });

    const imgFile = req.file;

    if (!imgFile) {
      logger.error("Image not found");
      return res.status(400).send({ message: "Image not found" });
    }

    const img_string = await storeImage(imgFile);

    if (!title) title = "";

    await MekanismePelayananInformasiPublik.findByIdAndUpdate(req.params.id, {
      title,
      subtitle,
      subtitle_link,
      img_string,
    });

    logger.info("Update mekanisme pelayanan informasi publik success");
    return res.status(201).send({
      message: "Update mekanisme pelayanan informasi publik success",
      data: {},
    });
  } catch (error) {
    logger.error("Err: mekanisme pelayanan - update ", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

const deleteMekanismePelayanan = async (req, res) => {
  try {
    await MekanismePelayananInformasiPublik.findByIdAndDelete(req.params.id);

    logger.info("Delete mekanisme pelayanan informasi publik success");
    return res.status(201).send({
      message: "Delete mekanisme pelayanan informasi publik success",
      data: {},
    });
  } catch (error) {
    logger.error("Err: mekanisme pelayanan - delete ", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = {
  postMekanismePelayanan,
  getMekanismePelayanan,
  getMekanismePelayananById,
  updateMekanismePelayanan,
  deleteMekanismePelayanan,
};
