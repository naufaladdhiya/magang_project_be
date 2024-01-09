const logger = require("../utils/logger");
const { storeImage } = require("../utils/helper");
const ProfileWalikotaModel = require("../models/profile/walikota.model");
const ProfileWakilwaliModel = require("../models/profile/wakilwali.model");
const ProfileSekretarisModel = require("../models/profile/sekretaris.model");

const postProfileWalikota = async (req, res) => {
  let { profile } = req.body;

  try {
    const findData = await ProfileWalikotaModel.findOne({});
    if (findData) {
      logger.error("Profile already exists");
      return res.status(400).send({ message: "Profile already exists" });
    }

    const imgFile = req.file;

    if (!imgFile) {
      logger.error("Image not found");
      return res.status(400).send({ message: "Image not found" });
    }

    const img_string = await storeImage(imgFile);

    if (!profile) profile = "";

    const profileData = await ProfileWalikotaModel.create({
      profile,
      img_string,
    });

    logger.info("Create profile success");
    return res.status(201).send({
      message: "Create profile success",
      data: {
        id: profileData.id,
        profile: profileData.profile,
        img_string: profileData.img_string,
      },
    });
  } catch (error) {
    logger.error("Err: profile - create ", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

const getProfileWalikota = async (req, res) => {
  try {
    const profileData = await ProfileWalikotaModel.findOne({});
    if (!profileData) {
      logger.error("Profile not found");
      return res.status(404).send({ message: "Profile not found" });
    }

    logger.info("Get profile success");
    return res.status(200).send({
      message: "Get profile success",
      data: {
        id: profileData.id,
        profile: profileData.profile,
        img_string: profileData.img_string,
      },
    });
  } catch (error) {
    logger.error("Err: profile - get ", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

const updateProfileWalikota = async (req, res) => {
  const { profile } = req.body;
  const imgFile = req.file;

  try {
    const profileData = await ProfileWalikotaModel.findOne({});
    if (!profileData) {
      logger.error("Profile not found");
      return res.status(404).send({ message: "Profile not found" });
    }

    if (imgFile) {
      const img_string = await storeImage(imgFile);
      profileData.img_string = img_string;
    }

    profileData.profile = profile;
    await profileData.save();

    logger.info("Update profile success");
    return res.status(200).send({
      message: "Update profile success",
      data: {
        id: profileData.id,
        profile: profileData.profile,
        img_string: profileData.img_string,
      },
    });
  } catch (error) {
    logger.error("Err: profile - update ", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

const deleteProfileWalikota = async (req, res) => {
  try {
    await ProfileWalikotaModel.deleteMany({});

    logger.info("Delete profiles walikota success");
    return res.status(200).send({
      message: "Delete profiles walikota success",
      data: {},
    });
  } catch (error) {
    console.log(error);
    logger.error("Err: profile - delete ", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

//* Wakil Wali Kota
const postProfileWakilwali = async (req, res) => {
  let { profile } = req.body;

  try {
    const findData = await ProfileWakilwaliModel.findOne({});
    if (findData) {
      logger.error("Profile already exists");
      return res.status(400).send({ message: "Profile already exists" });
    }

    const imgFile = req.file;

    if (!imgFile) {
      logger.error("Image not found");
      return res.status(400).send({ message: "Image not found" });
    }

    const img_string = await storeImage(imgFile);

    if (!profile) profile = "";

    const profileData = await ProfileWakilwaliModel.create({
      profile,
      img_string,
    });

    logger.info("Create profile success");
    return res.status(201).send({
      message: "Create profile success",
      data: {
        id: profileData.id,
        profile: profileData.profile,
        img_string: profileData.img_string,
      },
    });
  } catch (error) {
    logger.error("Err: profile - create ", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

const getProfileWakilwali = async (req, res) => {
  try {
    const profileData = await ProfileWakilwaliModel.findOne({});
    if (!profileData) {
      logger.error("Profile not found");
      return res.status(404).send({ message: "Profile not found" });
    }

    logger.info("Get profile success");
    return res.status(200).send({
      message: "Get profile success",
      data: {
        id: profileData.id,
        profile: profileData.profile,
        img_string: profileData.img_string,
      },
    });
  } catch (error) {
    logger.error("Err: profile - get ", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

const updateProfileWakilwali = async (req, res) => {
  const { profile } = req.body;
  const imgFile = req.file;

  try {
    const profileData = await ProfileWakilwaliModel.findOne({});
    if (!profileData) {
      logger.error("Profile not found");
      return res.status(404).send({ message: "Profile not found" });
    }

    if (imgFile) {
      const img_string = await storeImage(imgFile);
      profileData.img_string = img_string;
    }

    profileData.profile = profile;
    await profileData.save();

    logger.info("Update profile success");
    return res.status(200).send({
      message: "Update profile success",
      data: {
        id: profileData.id,
        profile: profileData.profile,
        img_string: profileData.img_string,
      },
    });
  } catch (error) {
    logger.error("Err: profile - update ", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

const deleteProfileWakilwali = async (req, res) => {
  try {
    await ProfileWakilwaliModel.deleteMany({});

    logger.info("Delete profiles Wakil Walikota success");
    return res.status(200).send({
      message: "Delete profiles Wakil Walikota  success",
      data: {},
    });
  } catch (error) {
    console.log(error);
    logger.error("Err: profile - delete ", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

//* Sekretaris Walikota
const postProfileSekretaris = async (req, res) => {
  let { profile } = req.body;

  try {
    const findData = await ProfileSekretarisModel.findOne({});
    if (findData) {
      logger.error("Profile already exists");
      return res.status(400).send({ message: "Profile already exists" });
    }

    const imgFile = req.file;

    if (!imgFile) {
      logger.error("Image not found");
      return res.status(400).send({ message: "Image not found" });
    }

    const img_string = await storeImage(imgFile);

    if (!profile) profile = "";

    const profileData = await ProfileSekretarisModel.create({
      profile,
      img_string,
    });

    logger.info("Create profile success");
    return res.status(201).send({
      message: "Create profile success",
      data: {
        id: profileData.id,
        profile: profileData.profile,
        img_string: profileData.img_string,
      },
    });
  } catch (error) {
    logger.error("Err: profile - create ", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

const getProfileSekretaris = async (req, res) => {
  try {
    const profileData = await ProfileSekretarisModel.findOne({});
    if (!profileData) {
      logger.error("Profile not found");
      return res.status(404).send({ message: "Profile not found" });
    }

    logger.info("Get profile success");
    return res.status(200).send({
      message: "Get profile success",
      data: {
        id: profileData.id,
        profile: profileData.profile,
        img_string: profileData.img_string,
      },
    });
  } catch (error) {
    logger.error("Err: profile - get ", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

const updateProfileSekretaris = async (req, res) => {
  const { profile } = req.body;
  const imgFile = req.file;

  try {
    const profileData = await ProfileSekretarisModel.findOne({});
    if (!profileData) {
      logger.error("Profile not found");
      return res.status(404).send({ message: "Profile not found" });
    }

    if (imgFile) {
      const img_string = await storeImage(imgFile);
      profileData.img_string = img_string;
    }

    profileData.profile = profile;
    await profileData.save();

    logger.info("Update profile success");
    return res.status(200).send({
      message: "Update profile success",
      data: {
        id: profileData.id,
        profile: profileData.profile,
        img_string: profileData.img_string,
      },
    });
  } catch (error) {
    logger.error("Err: profile - update ", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

const deleteProfileSekretaris = async (req, res) => {
  try {
    await ProfileSekretarisModel.deleteMany({});

    logger.info("Delete profiles Wakil Walikota success");
    return res.status(200).send({
      message: "Delete profiles Wakil Walikota  success",
      data: {},
    });
  } catch (error) {
    console.log(error);
    logger.error("Err: profile - delete ", error);
    return res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = {
  postProfileWalikota,
  getProfileWalikota,
  updateProfileWalikota,
  deleteProfileWalikota,
  postProfileWakilwali,
  getProfileWakilwali,
  updateProfileWakilwali,
  deleteProfileWakilwali,
  postProfileSekretaris,
  getProfileSekretaris,
  updateProfileSekretaris,
  deleteProfileSekretaris,
};
