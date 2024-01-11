const mongoose = require("mongoose");

const ProfileDasarHukumTableSchema = new mongoose.Schema(
  {
    jenis: {
      type: String,
      required: true,
    },
    isi: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

ProfileDasarHukumTableSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = mongoose.model(
  "ProfileDasarHukumTable",
  ProfileDasarHukumTableSchema
);
