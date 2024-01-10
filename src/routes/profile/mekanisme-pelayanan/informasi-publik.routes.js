const { Router } = require("express");
const multer = require("multer");
const authToken = require("../../../middlewares/authToken");
const {
  postMekanismePelayanan,
  getMekanismePelayanan,
  getMekanismePelayananById,
  updateMekanismePelayanan,
  deleteMekanismePelayanan,
} = require("../../../controllers/profile/mekanisme-pelayanan/informasi-publik.controller");

const upload = multer({ storage: multer.memoryStorage() });
const ProfileMekanismePelayananInformasiPublikRouter = Router();

ProfileMekanismePelayananInformasiPublikRouter.post(
  "/mekanisme-pelayanan-informasi-publik",
  authToken,
  upload.single("image"),
  postMekanismePelayanan
);

ProfileMekanismePelayananInformasiPublikRouter.get(
  "/mekanisme-pelayanan-informasi-publik",
  getMekanismePelayanan
);

ProfileMekanismePelayananInformasiPublikRouter.get(
  "/mekanisme-pelayanan-informasi-publik/:id",
  getMekanismePelayananById
);

ProfileMekanismePelayananInformasiPublikRouter.put(
  "/mekanisme-pelayanan-informasi-publik/:id",
  authToken,
  upload.single("image"),
  updateMekanismePelayanan
);

ProfileMekanismePelayananInformasiPublikRouter.patch(
  "/mekanisme-pelayanan-informasi-publik/:id",
  authToken,
  upload.single("image"),
  updateMekanismePelayanan
);

ProfileMekanismePelayananInformasiPublikRouter.delete(
  "/mekanisme-pelayanan-informasi-publik/:id",
  authToken,
  deleteMekanismePelayanan
);

module.exports = ProfileMekanismePelayananInformasiPublikRouter;
