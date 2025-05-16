const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const express = require('express'); 
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const dbPath = path.join(__dirname, 'data', 'gallery.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Ошибка подключения к базе данных:', err.message);
  } else {
    console.log('База данных успешно подключена.');
  }
});

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/paintings', (req, res) => {
  let data = {};

  db.all('SELECT * FROM paintings', [], (errPaintings, rowsPaintings) => {
    if (errPaintings) {
      console.error('Ошибка при запросе к таблице paintings:', errPaintings.message);
      res.status(500).send('Ошибка при получении данных');
      return;
    }

    data.paintings = rowsPaintings;

    res.json(data);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});