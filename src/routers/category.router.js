const express = require('express');
const { insertCategory, selectCategories } = require('../controllers/category.controller');
// const { validateInputs } = require('../middlewares/validateInputs');
// const { validateToken } = require('../middlewares/validateToken');

const router = express.Router();

router
  .post('/', insertCategory)
  .get('/', selectCategories);

module.exports = router;