const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// start db connection
const db = require('./models/');

// dev mode
if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
  // logging
  app.use(require('morgan')('dev'));
}

app.use(express.static(path.join(__dirname, '../dist')));

// authentication routes
app.use(require('./auth/authRoutes'));


app.get('/api/username', (req, res) =>
  res.send({ username: 'hi' })
);

app.get('/', (req, res) => res.send('server online'));

app.listen(PORT, () => {
  console.log('Listening on port http://localhost:' + PORT);
});