const path = require('path');
const express = require('express');
const app = express();
const PORT = 3001;

app.use('/public/', express.static(path.join(__dirname, '../dist')));

app.get('/api/getUsername', (req, res) =>
  res.send({ username: 'hi' })
);

app.listen(PORT, () => console.log('Listening on port http://localhost:' + PORT));