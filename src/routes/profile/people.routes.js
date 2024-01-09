const { Router } = require("express");
const multer = require("multer");
const authToken = require("../../middlewares/authToken");
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
} = require("../../controllers/profile/people.controller");

const upload = multer({ storage: multer.memoryStorage() });
const ProfilePeopleRouter = Router();

ProfilePeopleRouter.post(
  "/walikota",
  authToken,
  upload.single("image"),
  postProfileWalikota
);
ProfilePeopleRouter.get("/walikota", getProfileWalikota);
ProfilePeopleRouter.put(
  "/walikota",
  authToken,
  upload.single("image"),
  updateProfileWalikota
);
ProfilePeopleRouter.patch(
  "/walikota",
  authToken,
  upload.single("image"),
  updateProfileWalikota
);
ProfilePeopleRouter.delete("/walikota", authToken, deleteProfileWalikota);

ProfilePeopleRouter.post(
  "/wakilwali",
  authToken,
  upload.single("image"),
  postProfileWakilwali
);
ProfilePeopleRouter.get("/wakilwali", getProfileWakilwali);
ProfilePeopleRouter.put(
  "/wakilwali",
  authToken,
  upload.single("image"),
  updateProfileWakilwali
);
ProfilePeopleRouter.patch(
  "/wakilwali",
  authToken,
  upload.single("image"),
  updateProfileWakilwali
);
ProfilePeopleRouter.delete("/wakilwali", authToken, deleteProfileWakilwali);

ProfilePeopleRouter.post(
  "/sekretaris",
  authToken,
  upload.single("image"),
  postProfileSekretaris
);
ProfilePeopleRouter.get("/sekretaris", getProfileSekretaris);
ProfilePeopleRouter.put(
  "/sekretaris",
  authToken,
  upload.single("image"),
  updateProfileSekretaris
);
ProfilePeopleRouter.patch(
  "/sekretaris",
  authToken,
  upload.single("image"),
  updateProfileSekretaris
);
ProfilePeopleRouter.delete("/sekretaris", authToken, deleteProfileSekretaris);

module.exports = ProfilePeopleRouter;
