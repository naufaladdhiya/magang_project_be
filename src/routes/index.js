const HealthRouter = require("./health.routes");
const UserRouter = require("./user.routes");

const _routes = [
  ["/", HealthRouter],
  ["/auth", UserRouter],
];

const routes = (app) => {
  _routes.forEach((route) => {
    const [url, router] = route;
    app.use(url, router);
  });
};

module.exports = routes;
