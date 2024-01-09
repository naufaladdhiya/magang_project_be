const HealthRouter = require("./health.routes");

const _routes = [["/", HealthRouter]];

const routes = (app) => {
  _routes.forEach((route) => {
    const [url, router] = route;
    app.use(url, router);
  });
};

module.exports = routes;
