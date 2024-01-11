const mongoose = require("mongoose");

const ProfileFormulirKeberatanTableSchema = new mongoose.Schema(
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

ProfileFormulirKeberatanTableSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = mongoose.model(
  "ProfileFormulirKeberatanTable",
  ProfileFormulirKeberatanTableSchema
);
