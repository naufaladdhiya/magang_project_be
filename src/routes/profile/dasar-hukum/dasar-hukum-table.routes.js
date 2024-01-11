const { Router } = require("express");
const authToken = require("../../../middlewares/authToken");
const {
  postDasarHukumTable,
  getDasarHukumTable,
  getDasarHukumTableById,
  updateDasarHukumTable,
  deleteDasarHukumTable,
} = require("../../../controllers/profile/dasar-hukum/dasar-hukum-table.controller");

const ProfileDasarHukumTableRouter = Router();

ProfileDasarHukumTableRouter.post(
  "/dasar-hukum-table",
  authToken,
  postDasarHukumTable
);
ProfileDasarHukumTableRouter.get("/dasar-hukum-table", getDasarHukumTable);
ProfileDasarHukumTableRouter.get(
  "/dasar-hukum-table/:id",
  getDasarHukumTableById
);
ProfileDasarHukumTableRouter.put(
  "/dasar-hukum-table/:id",
  authToken,
  updateDasarHukumTable
);
ProfileDasarHukumTableRouter.patch(
  "/dasar-hukum-table/:id",
  authToken,
  updateDasarHukumTable
);
ProfileDasarHukumTableRouter.delete(
  "/dasar-hukum-table/:id",
  authToken,
  deleteDasarHukumTable
);

module.exports = ProfileDasarHukumTableRouter;
