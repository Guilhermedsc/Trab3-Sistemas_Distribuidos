// server.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;
const dataFilePath = 'data.json';

app.use(bodyParser.json());

// Função para carregar dados do arquivo
function loadFileData() {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

// Função para salvar dados no arquivo
function saveFileData(data) {
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
}

// Rota para adicionar um item
app.post('/adicionar', (req, res) => {
  const newData = req.body;
  const data = loadFileData();
  data.push(newData);
  saveFileData(data);
  res.json({ message: 'Animal adicionado com sucesso!' });
});

// Rota para editar um item
app.put('/editar/:id', (req, res) => {
  const itemId = req.params.id;
  const updatedData = req.body;
  const data = loadFileData();
  const index = data.findIndex(item => item.id === itemId);

  if (index !== -1) {
    data[index] = { ...data[index], ...updatedData };
    saveFileData(data);
    res.json({ message: 'Animal editado com sucesso!' });
  } else {
    res.status(404).json({ error: 'Animal não encontrado!' });
  }
});

// Rota para imprimir todos os itens
app.get('/imprimir', (req, res) => {
  const data = loadFileData();
  res.json(data);
});

// Rota para excluir um item
app.delete('/excluir/:id', (req, res) => {
  const itemId = req.params.id;
  const data = loadFileData();
  const newData = data.filter(item => item.id !== itemId);

  if (newData.length < data.length) {
    saveFileData(newData);
    res.json({ message: 'Animal excluído com sucesso!' });
  } else {
    res.status(404).json({ error: 'Animal não encontrado!' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});