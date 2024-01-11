const { Router } = require("express");
const authToken = require("../../../middlewares/authToken");
const {
  postDasarHukumFile,
  deleteDasarHukumFile,
  getDasarHukumFile,
  getDasarHukumFileById,
  updateDasarHukumFile,
} = require("../../../controllers/profile/dasar-hukum/dasar-hukum-file.controller");

const ProfileDasarHukumFileRouter = Router();

ProfileDasarHukumFileRouter.post(
  "/dasar-hukum-file",
  authToken,
  postDasarHukumFile
);
ProfileDasarHukumFileRouter.get("/dasar-hukum-file", getDasarHukumFile);
ProfileDasarHukumFileRouter.get("/dasar-hukum-file/:id", getDasarHukumFileById);
ProfileDasarHukumFileRouter.put(
  "/dasar-hukum-file/:id",
  authToken,
  updateDasarHukumFile
);
ProfileDasarHukumFileRouter.patch(
  "/dasar-hukum-file/:id",
  authToken,
  updateDasarHukumFile
);
ProfileDasarHukumFileRouter.delete(
  "/dasar-hukum-file/:id",
  authToken,
  deleteDasarHukumFile
);

module.exports = ProfileDasarHukumFileRouter;
