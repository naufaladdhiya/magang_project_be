const mongoose = require("mongoose");

const ProfileBaganOrganisasiSchema = new mongoose.Schema(
  {
    img_string: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

ProfileBaganOrganisasiSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = mongoose.model(
  "ProfileBaganOrganisasi",
  ProfileBaganOrganisasiSchema
);
