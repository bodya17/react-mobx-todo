const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const PORT = 3000;

const todos = [
  {
    id: Math.random(),
    title: 'Run',
    finished: false
  },
  {
    id: Math.random(),
    title: 'Get tea',
    finished: true
  }
];

app.use(bodyParser.json());

app.use(cors());

app.get('/todos', (req, res) => {
  res.send(todos);
});

app.post('/todo', (req, res) => {
  todos.push(req.body.todo);
  res.send({ status: 'ok' });
});

app.delete('/todo', (req, res) => {
  const { id } = req.body;
  const index = todos.findIndex(todo => todo.id === id);
  if (index === -1) {
    res.send({ error: `No todo with id ${id}` });
  } else {
    todos.splice(index, 1);
    res.send({ status: 'ok' });
  }
});

app.put('/todo', (req, res) => {
  const todo = req.body;
  const index = todos.findIndex(t => t.id === todo.id);
  if (index === -1) {
    res.send({ error: `No todo with id ${id}` });
  } else {
    Object.assign(todos[index], todo);
    res.send({ status: 'ok' });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
