const { Router } = require("express");
const multer = require("multer");
const authToken = require("../../middlewares/authToken");
const {
  postMaklumatPelayanan,
  deleteMaklumatPelayanan,
  getMaklumatPelayanan,
  getMaklumatPelayananById,
  updateMaklumatPelayanan,
} = require("../../controllers/profile/maklumat-pelayanan.controller");

const upload = multer({ storage: multer.memoryStorage() });
const ProfileMaklumatPelayanan = Router();

ProfileMaklumatPelayanan.post(
  "/maklumat-pelayanan",
  authToken,
  upload.single("image"),
  postMaklumatPelayanan
);

ProfileMaklumatPelayanan.get("/maklumat-pelayanan", getMaklumatPelayanan);

ProfileMaklumatPelayanan.get(
  "/maklumat-pelayanan/:id",
  getMaklumatPelayananById
);

ProfileMaklumatPelayanan.put(
  "/maklumat-pelayanan/:id",
  authToken,
  upload.single("image"),
  updateMaklumatPelayanan
);

ProfileMaklumatPelayanan.patch(
  "/maklumat-pelayanan/:id",
  authToken,
  upload.single("image"),
  updateMaklumatPelayanan
);

ProfileMaklumatPelayanan.delete(
  "/maklumat-pelayanan/:id",
  authToken,
  deleteMaklumatPelayanan
);

module.exports = ProfileMaklumatPelayanan;
