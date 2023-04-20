const express = require('express');
const { insertUser } = require('../controllers/user.controller');
const { validateInputs } = require('../middlewares/validateInputs');

const router = express.Router();

router
  .post('/', validateInputs, insertUser);

module.exports = router;