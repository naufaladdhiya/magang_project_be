const HealthRouter = require("./health.routes");
const UserRouter = require("./user.routes");
const ProfilePeopleRouter = require("./profile/people.routes");
const ProfilePPIDRouter = require("./profile/ppid.routes");
const ProfileBaganOrganisasiRouter = require("./profile/bagan-organisasi.routes");

const _routes = [
  ["/", HealthRouter],
  ["/auth", UserRouter],
  ["/profile", ProfilePeopleRouter],
  ["/profile", ProfilePPIDRouter],
  ["/profile", ProfileBaganOrganisasiRouter],
];

const routes = (app) => {
  _routes.forEach((route) => {
    const [url, router] = route;
    app.use(url, router);
  });
};

module.exports = routes;
