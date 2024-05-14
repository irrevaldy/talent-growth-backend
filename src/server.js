const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.listen(3000, () => {
  console.log('Express server is listening on port 3000');
});

// Get all items
app.get('/api/items', (req, res) => {
res.json([{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]);
});

// Get a single item by id
app.get('/api/items/:id', (req, res) => {
const itemId = req.params.id;
res.json({ id: itemId, name: `Item ${itemId}` });
});

// Create a new item
app.post('/api/items', (req, res) => {
const newItem = req.body;
res.status(201).json(newItem);
});

// Update an item by id
app.put('/api/items/:id', (req, res) => {
const itemId = req.params.id;
const updatedItem = req.body;
res.json({ id: itemId, ...updatedItem });
});

// Delete an item by id
app.delete('/api/items/:id', (req, res) => {
const itemId = req.params.id;
res.status(204).send();
});