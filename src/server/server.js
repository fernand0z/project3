const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// start db connection
const db = require('./models/');

// dev mode
if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
  // logging
  app.use(require('morgan')('dev'));

  // development hot reloading
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const config = require('../../config/webpack.dev.js');
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

// serve static files
app.use(express.static(path.join(__dirname, '../../dist')));

// authentication routes
app.use(require('./auth/authRoutes'));

// all other routes is the react app
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

app.listen(PORT, () => {
  console.log('Listening on port http://localhost:' + PORT);
});