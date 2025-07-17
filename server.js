const express = require('express');
const path = require('path');
const app = express();
// Render provides the PORT environment variable.
const port = process.env.PORT || 10000;

// Endpoint for the Google Gemini API Key
app.get('/api/get-google-key', (req, res) => {
  const apiKey = process.env.API_KEY; // This is the key you already have set
  if (apiKey) {
    res.json({ apiKey: apiKey });
  } else {
    res.status(500).json({ error: 'API_KEY (Google) environment variable not set on the server.' });
  }
});

// NEW: Endpoint for The Odds API Key
app.get('/api/get-odds-key', (req, res) => {
    const oddsApiKey = process.env.ODDS_API_KEY;
    if(oddsApiKey) {
        res.json({ oddsApiKey: oddsApiKey });
    } else {
        res.status(500).json({ error: 'ODDS_API_KEY environment variable not set on the server.' });
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
