const express = require('express');
const app = express();

const PORT = process.argv[2];

app.get('/', (req, res) => {
  console.log('GET Request');
  res.send(`Served from ${process.pid}`);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
