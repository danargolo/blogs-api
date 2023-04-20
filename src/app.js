const express = require('express');
const loginRouter = require('./routers/login.router');
const userRouter = require('./routers/user.router');
const categoryRouter = require('./routers/category.router');
const postRouter = require('./routers/post.router');
const { validateToken } = require('./middlewares/validateToken');
const error = require('./middlewares/error');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', validateToken, categoryRouter);
app.use('/post', postRouter);

app.use(error);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
