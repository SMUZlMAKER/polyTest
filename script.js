const express = require('express');
const app = express();
const port = 3000;

// Заранее определенный JSON
const myJson = {
  name: 'John Doe',
  age: 30,
  city: 'New York'
};

// Обработчик GET запросов
app.get('/', (req, res) => {
  res.json(myJson);
});

app.listen(port, () => {
  console.log(Server listening on port ${port});
});
