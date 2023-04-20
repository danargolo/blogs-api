const express = require('express');
const { validatePost } = require('../middlewares/validatePost');
const { insertPost } = require('../controllers/post.controller');
const { validateToken } = require('../middlewares/validateToken');

const router = express.Router();

router
  .post('/', validateToken, validatePost, insertPost);

module.exports = router;