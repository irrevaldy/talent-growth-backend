const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

let formData = [];

// Endpoint to submit form data
app.post('/submit', (req, res) => {
  const data = req.body;
  
  // Simple validation example
  if (!data.name || !data.email || !data.phone || !data.password || !data.confirmPassword || !data.address) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  formData.push(data);
  res.status(201).json({ message: 'Form data submitted successfully' });
});

// Endpoint to get all form data
app.get('/data', (req, res) => {
  res.json(formData);
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});