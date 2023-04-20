const express = require('express');
const { insertUser, selectUsers } = require('../controllers/user.controller');
const { validateInputs } = require('../middlewares/validateInputs');
const { validateToken } = require('../middlewares/validateToken');

const router = express.Router();

router
  .post('/', validateInputs, insertUser)
  .get('/', validateToken, selectUsers);

module.exports = router;