const Joi = require('joi');

const userInputs = Joi.object({
  displayName: Joi.string().min(8).required().label('displayName'),
  email: Joi.string().email().label('email'),
  password: Joi.string().min(6).required().label('password'),
  image: Joi.any().optional(),
}).messages({
  'email.email': '{#label} must be a valid email',
  'string.min': '{#label} length must be at least {#limit} characters long',
});

module.exports = {
  userInputs,
};