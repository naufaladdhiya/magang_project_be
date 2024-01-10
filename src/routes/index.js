const HealthRouter = require("./health.routes");
const UserRouter = require("./user.routes");
const ProfilePeopleRouter = require("./profile/people.routes");
const ProfilePPIDRouter = require("./profile/ppid.routes");
const ProfileBaganOrganisasiRouter = require("./profile/bagan-organisasi.routes");
const ProfileVisiMisiRouter = require("./profile/visi-misi.routes");
const ProfileDasarHukumTableRouter = require("./profile/dasar-hukum/dasar-hukum-table.routes");
const ProfileDasarHukumFileRouter = require("./profile/dasar-hukum/dasar-hukum-file.routes");
const ProfileMaklumatPelayanan = require("./profile/maklumat-pelayanan.routes");

const _routes = [
  ["/", HealthRouter],
  ["/auth", UserRouter],
  ["/profile", ProfilePeopleRouter],
  ["/profile", ProfilePPIDRouter],
  ["/profile", ProfileBaganOrganisasiRouter],
  ["/profile", ProfileVisiMisiRouter],
  ["/profile", ProfileDasarHukumTableRouter],
  ["/profile", ProfileDasarHukumFileRouter],
  ["/profile", ProfileMaklumatPelayanan],
];

const routes = (app) => {
  _routes.forEach((route) => {
    const [url, router] = route;
    app.use(url, router);
  });
};

module.exports = routes;
