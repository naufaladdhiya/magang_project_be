const { Router } = require("express");
const {
  postPPID,
  getPPID,
  getPPIDById,
  updatePPID,
  deletePPID,
} = require("../../controllers/profile/ppid.controller");
const authToken = require("../../middlewares/authToken");

const ProfilePPIDRouter = Router();

ProfilePPIDRouter.post("/ppid", authToken, postPPID);
ProfilePPIDRouter.get("/ppid", getPPID);
ProfilePPIDRouter.get("/ppid/:id", getPPIDById);
ProfilePPIDRouter.put("/ppid/:id", authToken, updatePPID);
ProfilePPIDRouter.patch("/ppid/:id", authToken, updatePPID);
ProfilePPIDRouter.delete("/ppid/:id", authToken, deletePPID);

module.exports = ProfilePPIDRouter;
