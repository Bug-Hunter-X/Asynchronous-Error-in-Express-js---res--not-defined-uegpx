const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation
  setTimeout(() => {
    // This code will run after a delay, so 'res' is not available after function execution
    res.send('Hello World!');
  }, 5000);
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});