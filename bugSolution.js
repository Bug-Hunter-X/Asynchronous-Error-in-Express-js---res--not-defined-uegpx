const express = require('express');
const app = express();
app.get('/', (req, res) => {
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  }).then(() => {
    res.send('Hello World!');
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});