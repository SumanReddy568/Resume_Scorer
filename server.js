const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000; // Use the provided PORT or default to 3000

// Serve static files from the 'src' directory
app.use(express.static(path.join(__dirname, 'src')));

// Serve index.html as the main entry point
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

