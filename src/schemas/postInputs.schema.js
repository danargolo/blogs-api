const Joi = require('joi');

const postInputs = Joi.object({
  title: Joi.string().empty().required(),
  content: Joi.string().empty().required(),
  categoryIds: Joi.array().empty().required(),
}).messages({
  'string.empty': 'Some required fields are missing',
  'array.required': 'one or more "categoryIds" not found',
});

module.exports = {
  postInputs,
};