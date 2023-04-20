const express = require('express');
const { insertCategory } = require('../controllers/category.controller');
// const { validateInputs } = require('../middlewares/validateInputs');
const { validateToken } = require('../middlewares/validateToken');

const router = express.Router();

router
  .post('/', validateToken, insertCategory);

module.exports = router;