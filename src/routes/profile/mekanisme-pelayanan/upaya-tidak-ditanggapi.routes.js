const { Router } = require("express");
const multer = require("multer");
const authToken = require("../../../middlewares/authToken");
const {
  postUpayaTidakDitanggapi,
  getUpayaTidakDitanggapi,
  getUpayaTidakDitanggapiById,
  updateUpayaTidakDitanggapi,
  deleteUpayaTidakDitanggapi,
} = require("../../../controllers/profile/mekanisme-pelayanan/upaya-tidak-ditanggapi.controller");

const upload = multer({ storage: multer.memoryStorage() });
const ProfileUpayaTidakDitanggapiRouter = Router();

ProfileUpayaTidakDitanggapiRouter.post(
  "/upaya-tidak-ditanggapi",
  authToken,
  upload.single("image"),
  postUpayaTidakDitanggapi
);

ProfileUpayaTidakDitanggapiRouter.get(
  "/upaya-tidak-ditanggapi",
  getUpayaTidakDitanggapi
);

ProfileUpayaTidakDitanggapiRouter.get(
  "/upaya-tidak-ditanggapi/:id",
  getUpayaTidakDitanggapiById
);

ProfileUpayaTidakDitanggapiRouter.put(
  "/upaya-tidak-ditanggapi/:id",
  authToken,
  upload.single("image"),
  updateUpayaTidakDitanggapi
);

ProfileUpayaTidakDitanggapiRouter.patch(
  "/upaya-tidak-ditanggapi/:id",
  authToken,
  upload.single("image"),
  updateUpayaTidakDitanggapi
);

ProfileUpayaTidakDitanggapiRouter.delete(
  "/upaya-tidak-ditanggapi",
  authToken,
  deleteUpayaTidakDitanggapi
);

module.exports = ProfileUpayaTidakDitanggapiRouter;
