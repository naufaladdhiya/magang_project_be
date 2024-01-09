const { Router } = require("express");

const HealthRouter = Router();

HealthRouter.get("/", (req, res, next) => {
  res.status(200).send({ status: "200", message: "OK" });
});

module.exports = HealthRouter;
