const express = require('express');
const path = require('path');
const app = express();
// Render provides the PORT environment variable.
const port = process.env.PORT || 10000;

// This endpoint will be called by the front-end to securely get the API key.
app.get('/api/get-key', (req, res) => {
  const apiKey = process.env.API_KEY;
  if (apiKey) {
    res.json({ apiKey: apiKey });
  } else {
    // This helps in debugging if the environment variable isn't set correctly on Render.
    res.status(500).json({ error: 'API_KEY environment variable not set on the server.' });
  }
});

// Serve the static files from the current directory (where index.html is).
app.use(express.static(__dirname));

// Ensure all other routes also serve the main page.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
