const mongoose = require("mongoose");

const MaklumatPelayananSchema = new mongoose.Schema(
  {
    title: {
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

MaklumatPelayananSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = mongoose.model("MaklumatPelayanan", MaklumatPelayananSchema);
