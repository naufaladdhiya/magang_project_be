const { Router } = require("express");
const multer = require("multer");
const authToken = require("../../middlewares/authToken");
const {
  postProfileBaganOrganisasi,
  getProfileBaganOrganisasi,
  updateProfileBaganOrganisasi,
  deleteProfileBaganOrganisasi,
} = require("../../controllers/profile/bagan-organisasi.controller");

const upload = multer({ storage: multer.memoryStorage() });
const ProfileBaganOrganisasiRouter = Router();

ProfileBaganOrganisasiRouter.post(
  "/bagan-organisasi",
  authToken,
  upload.single("image"),
  postProfileBaganOrganisasi
);

ProfileBaganOrganisasiRouter.get(
  "/bagan-organisasi",
  getProfileBaganOrganisasi
);

ProfileBaganOrganisasiRouter.put(
  "/bagan-organisasi/:id",
  authToken,
  upload.single("image"),
  updateProfileBaganOrganisasi
);

ProfileBaganOrganisasiRouter.patch(
  "/bagan-organisasi/:id",
  authToken,
  upload.single("image"),
  updateProfileBaganOrganisasi
);

ProfileBaganOrganisasiRouter.delete(
  "/bagan-organisasi",
  authToken,
  deleteProfileBaganOrganisasi
);

module.exports = ProfileBaganOrganisasiRouter;
