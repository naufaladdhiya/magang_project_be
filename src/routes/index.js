const HealthRouter = require("./health.routes");
const UserRouter = require("./user.routes");
const ProfileRouter = require("./profile.routes");

const _routes = [
  ["/", HealthRouter],
  ["/auth", UserRouter],
  ["/profile", ProfileRouter],
];

const routes = (app) => {
  _routes.forEach((route) => {
    const [url, router] = route;
    app.use(url, router);
  });
};

module.exports = routes;
