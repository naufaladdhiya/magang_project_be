const Joi = require("joi");

const createUserValidation = (payload) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });

  return schema.validate(payload);
};

module.exports = {
  createUserValidation,
};
