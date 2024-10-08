const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/menu', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const MenuItem = mongoose.model('MenuItem', new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
}));

// GET all menu items
app.get('/api/menu', async (req, res) => {
  const menuItems = await MenuItem.find();
  res.json(menuItems);
});

// POST a new menu item
app.post('/api/menu', async (req, res) => {
  const menuItem = new MenuItem(req.body);
  await menuItem.save();
  res.json(menuItem);
});

// PUT update a menu item
app.put('/api/menu/:id', async (req, res) => {
  const menuItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(menuItem);
});

// DELETE a menu item
app.delete('/api/menu/:id', async (req, res) => {
  await MenuItem.findByIdAndDelete(req.params.id);
  res.json({ message: 'Menu item deleted' });
});

app.listen(3000, () => console.log('Server running on port 3000'));
