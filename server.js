const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const axios = require('axios');

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname) });
});

app.get('/api', async (req, res) => {
  console.log(req.query); // Use req.query to access query parameters
  let url = "https://newsapi.org/v2/everything?" + new URLSearchParams(req.query);
  try {
    let response = await axios(url);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
