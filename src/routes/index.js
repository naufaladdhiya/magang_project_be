const HealthRouter = require("./health.routes");
const UserRouter = require("./user.routes");
const ProfilePeopleRouter = require("./profile/people.routes");
const ProfilePPIDRouter = require("./profile/ppid.routes");

const _routes = [
  ["/", HealthRouter],
  ["/auth", UserRouter],
  ["/profile", ProfilePeopleRouter],
  ["/profile", ProfilePPIDRouter],
];

const routes = (app) => {
  _routes.forEach((route) => {
    const [url, router] = route;
    app.use(url, router);
  });
};

module.exports = routes;
