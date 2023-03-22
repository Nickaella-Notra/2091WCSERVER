const express = require('express');
const app = express();

const dishes = [
  {
    type: 'Sisig',
    province: 'Pampanga',
    price: 220,
  },
  {
    type: 'Salpicao',
    province: 'Quezon',
    price: 180,
  },
  {
    type: 'Bagnet',
    province: 'Ilocos',
    price: 370,
  },
];

app.get('/dishes', (req, res) => {
  res.send(dishes);
});

app.get('/dishes/:type', (req, res) => {
  res.send(req.params.type);
});

app.get('/dishes/:type', (req, res) => {
  const dish = dishes.find((h) => h.type === req.params.type);
  if (!dish) return res.status(404).send('Record not Found');
  res.send(dishes);
});

app.listen(3000, () => console.log('listening on port 3000'));
