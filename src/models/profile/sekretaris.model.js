const mongoose = require("mongoose");

const ProfileSekretarisSchema = new mongoose.Schema(
  {
    profile: {
      type: String,
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

ProfileSekretarisSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = mongoose.model("ProfileSekretaris", ProfileSekretarisSchema);
