const mongoose = require("mongoose");

const ProfileWakilwaliSchema = new mongoose.Schema(
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

ProfileWakilwaliSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = mongoose.model("ProfileWakilwali", ProfileWakilwaliSchema);
