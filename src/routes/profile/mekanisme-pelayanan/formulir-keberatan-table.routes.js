const { Router } = require("express");
const authToken = require("../../../middlewares/authToken");
const {
  postFormulirKeberatanTable,
  getFormulirKeberatanTable,
  getFormulirKeberatanTableById,
  updateFormulirKeberatanTable,
  deleteFormulirKeberatanTable,
} = require("../../../controllers/profile/mekanisme-pelayanan/formulir-keberatan-table.controller");

const ProfileFormulirKeberatanTableRouter = Router();

ProfileFormulirKeberatanTableRouter.post(
  "/formulir-keberatan-table",
  authToken,
  postFormulirKeberatanTable
);
ProfileFormulirKeberatanTableRouter.get(
  "/formulir-keberatan-table",
  getFormulirKeberatanTable
);
ProfileFormulirKeberatanTableRouter.get(
  "/formulir-keberatan-table/:id",
  getFormulirKeberatanTableById
);
ProfileFormulirKeberatanTableRouter.put(
  "/formulir-keberatan-table/:id",
  authToken,
  updateFormulirKeberatanTable
);
ProfileFormulirKeberatanTableRouter.patch(
  "/formulir-keberatan-table/:id",
  authToken,
  updateFormulirKeberatanTable
);
ProfileFormulirKeberatanTableRouter.delete(
  "/formulir-keberatan-table/:id",
  authToken,
  deleteFormulirKeberatanTable
);

module.exports = ProfileFormulirKeberatanTableRouter;
