const { Router } = require("express");
const { getMe, login, register } = require("../controllers/user.controller");
const authToken = require("../middlewares/authToken");

const UserRouter = Router();

UserRouter.post("/registration", register);
UserRouter.post("/login", login);
UserRouter.get("/me", authToken, getMe);

module.exports = UserRouter;
