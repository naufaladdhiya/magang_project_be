const { Router } = require("express");
const {
  postVisiMisi,
  getVisiMisi,
  updateVisiMisi,
  deleteVisiMisi,
  getVisiMisiById,
} = require("../../controllers/profile/visi-misi.controller");
const authToken = require("../../middlewares/authToken");

const ProfileVisiMisiRouter = Router();

ProfileVisiMisiRouter.post("/visi-misi", authToken, postVisiMisi);
ProfileVisiMisiRouter.get("/visi-misi", getVisiMisi);
ProfileVisiMisiRouter.get("/visi-misi/:id", getVisiMisiById);
ProfileVisiMisiRouter.put("/visi-misi/:id", authToken, updateVisiMisi);
ProfileVisiMisiRouter.patch("/visi-misi/:id", authToken, updateVisiMisi);
ProfileVisiMisiRouter.delete("/visi-misi/:id", authToken, deleteVisiMisi);

module.exports = ProfileVisiMisiRouter;
