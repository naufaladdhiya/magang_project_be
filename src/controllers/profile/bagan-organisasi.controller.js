const logger = require("../../utils/logger");
const { storeImage } = require("../../utils/helper");
const ProfileBaganOrganisasiModel = require("../../models/profile/bagan-organisasi.model");

const postProfileBaganOrganisasi = async (req, res) => {
  try {
    const findData = await ProfileBaganOrganisasiModel.findOne({});
    if (findData) {
      logger.error("Bagan organisasi already exists");
      return res
        .status(400)
        .send({ message: "Bagan organisasi already exists" });
    }

    const imgFile = req.file;

    if (!imgFile) {
      logger.error("Image not found");
      return res.status(400).send({ message: "Image not found" });
    }

    const img_string = await storeImage(imgFile);

    const profileData = await ProfileBaganOrganisasiModel.create({
      img_string,
    });

    logger.info("Create profile bagan organisasi success");
    return res.status(201).send({
      message: "Create profile bagan organisasi success",
      data: {
        id: profileData.id,
        img_string: profileData.img_string,
      },
    });
  } catch (error) {
    logger.error("Err: profile - create ", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

const getProfileBaganOrganisasi = async (req, res) => {
  try {
    const findData = await ProfileBaganOrganisasiModel.findOne({});
    if (!findData) {
      logger.error("Bagan organisasi not found");
      return res.status(404).send({ message: "Bagan organisasi not found" });
    }

    logger.info("Get profile bagan organisasi success");
    return res.status(200).send({
      message: "Get profile bagan organisasi success",
      data: {
        id: findData.id,
        img_string: findData.img_string,
      },
    });
  } catch (error) {
    logger.error("Err: profile - get ", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

const updateProfileBaganOrganisasi = async (req, res) => {
  try {
    const findData = await ProfileBaganOrganisasiModel.findOne({});
    if (!findData) {
      logger.error("Bagan organisasi not found");
      return res.status(404).send({ message: "Bagan organisasi not found" });
    }

    const imgFile = req.file;

    if (!imgFile) {
      logger.error("Image not found");
      return res.status(400).send({ message: "Image not found" });
    }

    const img_string = await storeImage(imgFile);

    const profileData = await ProfileBaganOrganisasiModel.findByIdAndUpdate(
      findData.id,
      {
        img_string,
      },
      { new: true }
    );

    logger.info("Update profile bagan organisasi success");
    return res.status(200).send({
      message: "Update profile bagan organisasi success",
      data: {
        id: profileData.id,
        img_string: profileData.img_string,
      },
    });
  } catch (error) {
    logger.error("Err: profile - update ", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

const deleteProfileBaganOrganisasi = async (req, res) => {
  try {
    await ProfileBaganOrganisasiModel.deleteMany({});

    logger.info("Delete profile bagan organisasi success");
    return res.status(200).send({
      message: "Delete profile bagan organisasi success",
    });
  } catch (error) {
    logger.error("Err: profile - delete ", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = {
  postProfileBaganOrganisasi,
  getProfileBaganOrganisasi,
  updateProfileBaganOrganisasi,
  deleteProfileBaganOrganisasi,
};
