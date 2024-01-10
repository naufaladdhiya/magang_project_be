const mongoose = require("mongoose");

const ProfileMekanismePelayananInformasiPublikSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    subtitle: {
      type: String,
      required: true,
    },
    subtitle_link: {
      type: String,
      required: true,
    },
    img_string: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

ProfileMekanismePelayananInformasiPublikSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = mongoose.model(
  "ProfileMekanismePelayananInformasiPublik",
  ProfileMekanismePelayananInformasiPublikSchema
);
