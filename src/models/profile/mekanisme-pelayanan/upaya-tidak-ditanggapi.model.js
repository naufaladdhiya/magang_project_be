const mongoose = require("mongoose");

const ProfileUpayaTidakDitanggapiSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tata_cara: {
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

ProfileUpayaTidakDitanggapiSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = mongoose.model(
  "ProfileUpayaTidakDitanggapi",
  ProfileUpayaTidakDitanggapiSchema
);
