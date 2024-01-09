const { Router } = require("express");
const multer = require("multer");
const authToken = require("../middlewares/authToken");
const {
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
} = require("../controllers/profile.controller");

const upload = multer({ storage: multer.memoryStorage() });
const ProfileRouter = Router();

ProfileRouter.post(
  "/walikota",
  authToken,
  upload.single("image"),
  postProfileWalikota
);
ProfileRouter.get("/walikota", getProfileWalikota);
ProfileRouter.put(
  "/walikota",
  authToken,
  upload.single("image"),
  updateProfileWalikota
);
ProfileRouter.patch(
  "/walikota",
  authToken,
  upload.single("image"),
  updateProfileWalikota
);
ProfileRouter.delete("/walikota", authToken, deleteProfileWalikota);

ProfileRouter.post(
  "/wakilwali",
  authToken,
  upload.single("image"),
  postProfileWakilwali
);
ProfileRouter.get("/wakilwali", getProfileWakilwali);
ProfileRouter.put(
  "/wakilwali",
  authToken,
  upload.single("image"),
  updateProfileWakilwali
);
ProfileRouter.patch(
  "/wakilwali",
  authToken,
  upload.single("image"),
  updateProfileWakilwali
);
ProfileRouter.delete("/wakilwali", authToken, deleteProfileWakilwali);

ProfileRouter.post(
  "/sekretaris",
  authToken,
  upload.single("image"),
  postProfileSekretaris
);
ProfileRouter.get("/sekretaris", getProfileSekretaris);
ProfileRouter.put(
  "/sekretaris",
  authToken,
  upload.single("image"),
  updateProfileSekretaris
);
ProfileRouter.patch(
  "/sekretaris",
  authToken,
  upload.single("image"),
  updateProfileSekretaris
);
ProfileRouter.delete("/sekretaris", authToken, deleteProfileSekretaris);

module.exports = ProfileRouter;
