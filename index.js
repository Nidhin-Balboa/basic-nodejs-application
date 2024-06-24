// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!, This is nidhin');
});

app.listen(port, () => {
  console.log(`Test app listening at to the port of  http://localhost:${port}`);
});

