const { Router } = require("express");
const authToken = require("../../middlewares/authToken");
const {
  postLinkPPIDPelaksana,
  getLinkPPIDPelaksana,
  getLinkPPIDPelaksanaById,
  updateLinkPPIDPelaksana,
  deleteLinkPPIDPelaksana,
} = require("../../controllers/profile/link-ppid-pelaksana.controller");

const ProfileLinkPPIDPelaksanaRouter = Router();

ProfileLinkPPIDPelaksanaRouter.post(
  "/link-ppid-pelaksana",
  authToken,
  postLinkPPIDPelaksana
);
ProfileLinkPPIDPelaksanaRouter.get(
  "/link-ppid-pelaksana",
  getLinkPPIDPelaksana
);
ProfileLinkPPIDPelaksanaRouter.get(
  "/link-ppid-pelaksana/:id",
  getLinkPPIDPelaksanaById
);
ProfileLinkPPIDPelaksanaRouter.put(
  "/link-ppid-pelaksana/:id",
  authToken,
  updateLinkPPIDPelaksana
);
ProfileLinkPPIDPelaksanaRouter.patch(
  "/link-ppid-pelaksana/:id",
  authToken,
  updateLinkPPIDPelaksana
);
ProfileLinkPPIDPelaksanaRouter.delete(
  "/link-ppid-pelaksana/:id",
  authToken,
  deleteLinkPPIDPelaksana
);

module.exports = ProfileLinkPPIDPelaksanaRouter;
