const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Database simulasi di memori
let items = [
  { id: 1, name: "Barang A", qty: 10 },
  { id: 2, name: "Barang B", qty: 5 }
];

// 1. READ (Get All)
app.get('/api/items', (req, res) => {
  res.status(200).json({ success: true, data: items });
});

// 2. CREATE
app.post('/api/items', (req, res) => {
  const { name, qty } = req.body;
  if (!name || !qty) {
    return res.status(400).json({ success: false, message: "Name and Qty are required" });
  }
  const newItem = { id: items.length + 1, name, qty };
  items.push(newItem);
  res.status(201).json({ success: true, data: newItem });
});

// 3. DELETE
app.delete('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex(item => item.id === id);
  if (index === -1) {
    return res.status(404).json({ success: false, message: "Item not found" });
  }
  items.splice(index, 1);
  res.status(200).json({ success: true, message: `Item ${id} deleted` });
});

// Health check untuk CI/CD test
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;