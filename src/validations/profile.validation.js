const Joi = require("joi");

const createPPIDValidation = (payload) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    user: Joi.object(),
  });

  return schema.validate(payload);
};

const updatePPIDValidation = (payload) => {
  const schema = Joi.object({
    title: Joi.string(),
    description: Joi.string(),
    user: Joi.object(),
  });

  return schema.validate(payload);
};

const createVisiMisiValidation = (payload) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    user: Joi.object(),
  });

  return schema.validate(payload);
};

const updateVisiMisiValidation = (payload) => {
  const schema = Joi.object({
    title: Joi.string(),
    description: Joi.string(),
    user: Joi.object(),
  });

  return schema.validate(payload);
};
const createDasarHukumTableValidation = (payload) => {
  const schema = Joi.object({
    jenis: Joi.string().required(),
    isi: Joi.string().required(),
    user: Joi.object(),
  });

  return schema.validate(payload);
};

const updateDasarHukumTableValidation = (payload) => {
  const schema = Joi.object({
    jenis: Joi.string(),
    isi: Joi.string(),
    user: Joi.object(),
  });

  return schema.validate(payload);
};

const createDasarHukumFileValidation = (payload) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    link: Joi.string().required(),
    user: Joi.object(),
  });

  return schema.validate(payload);
};

const updateDasarHukumFileValidation = (payload) => {
  const schema = Joi.object({
    title: Joi.string(),
    link: Joi.string(),
    user: Joi.object(),
  });

  return schema.validate(payload);
};

module.exports = {
  createPPIDValidation,
  updatePPIDValidation,
  createVisiMisiValidation,
  updateVisiMisiValidation,
  createDasarHukumTableValidation,
  updateDasarHukumTableValidation,
  createDasarHukumFileValidation,
  updateDasarHukumFileValidation,
};
