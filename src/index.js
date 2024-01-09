const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");
const logger = require("./utils/logger");
const { DB_URL, PORT } = require("./constants/config");
const app = express();

if (!DB_URL || !PORT) {
  throw new Error("Environment variables DB_URL and PORT must be defined");
}

mongoose.connect(DB_URL);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("connected", () => console.log("Connected to Database"));

// parser body handler
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// cors
const corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));

routes(app);

app.listen(PORT, () => {
  logger.info(`server is listening in port http://localhost:${PORT}`);
});
