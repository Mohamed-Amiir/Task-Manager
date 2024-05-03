const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('client'));


// Serve the React application for any other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'public', 'index.html'));
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});