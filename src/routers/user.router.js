const express = require('express');
const { insertUser, selectUsers, selectUserById, destroyUser } = require('../controllers/user.controller');
const { validateInputs } = require('../middlewares/validateInputs');
const { validateToken } = require('../middlewares/validateToken');

const router = express.Router();

router
  .post('/', validateInputs, insertUser)
  .get('/', validateToken, selectUsers)
  .get('/:id', validateToken, selectUserById)
  .delete('/me',validateToken, destroyUser )

module.exports = router;