const express = require('express');
const { getLogin } = require('../controllers/user.controller');
const validateFields = require('../middlewares/validateFields');

const router = express.Router();

router
  .post('/', validateFields, getLogin);

module.exports = router;