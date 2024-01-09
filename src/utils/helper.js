const axios = require("axios");
const { IMGBB_API_KEY } = require("../constants/config");

const storeImage = async (imgFile) => {
  const url = "https://api.imgbb.com/1/upload";
  const formData = new FormData();

  formData.append("image", imgFile.buffer.toString("base64"));
  formData.append("key", IMGBB_API_KEY);

  const response = await axios.post(url, formData);

  return response.data.data.url;
};

module.exports = {
  storeImage,
};
