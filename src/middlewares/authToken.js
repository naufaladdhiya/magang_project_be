const jtw = require("jsonwebtoken");
const { JWT_SECRET } = require("../constants/config");

const authToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).send({ message: "Unauthorized", data: {} });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decode = jtw.verify(token, JWT_SECRET);
    req.body.user = decode;
    next();
  } catch (error) {
    res.status(401).send({ message: "Unauthorized", data: {} });
  }
};

module.exports = authToken;
