var express = require('express');
var cors = require('cors');
var db = require('./sqlitedb.js');

var app = express();
app.use(cors());

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var HTTP_PORT = 8000;
app.listen(HTTP_PORT, () => {
 console.log('Server running on port %PORT%'.replace('%PORT%', HTTP_PORT));
});

app.get('/', (req, res, next) => {
 res.json({ message: 'Ok' });
});

app.get('/api/menu', (req, res, next) => {
 var sql = 'select * from menu';
 var params = [];
 db.all(sql, params, (err, rows) => {
  if (err) {
   res.status(400).json({ error: err.message });
   return;
  }
  res.json(rows);
 });
});

app.get('/api/menu/:id', (req, res, next) => {
 var sql = 'select * from menu where id = ?';
 var params = [req.params.id];
 db.get(sql, params, (err, row) => {
  if (err) {
   res.status(400).json({ error: err.message });
   return;
  }
  res.json(row);
 });
});

app.post('/api/menu/', (req, res, next) => {
 var errors = [];
 if (!req.body.item) {
  errors.push('No item specified');
 }
 var data = {
  name: req.body.name,
  price: req.body.price,
  category: req.body.category,
  updatedAt: req.body.updatedAt,
  createdAt: req.body.createdAt,
 };
 var sql = 'INSERT INTO menu (name, price, category, updatedAt, createdAt) VALUES (?,?,?,?,?)';
 var params = [data.name, data.price, data.category, data.updatedAt, data.createdAt];
 db.run(sql, params, function (err, result) {
  if (err) {
   res.status(400).json({ error: err.message });
   return;
  }
  data.id = this.lastID;
  res.json(data);
 });
});

app.put('/api/menu/:id', (req, res, next) => {
 var data = {
  name: req.body.name,
  price: req.body.price,
  category: req.body.category,
  updatedAt: req.body.updatedAt,
 };
 db.run(
  `UPDATE menu SET
         name = ?, 
         price = ?,
         category = ?, 
         updatedAt = ?, 
         WHERE id = ?`,
  [data.name, data.price, data.category, data.updatedAt, req.params.id],
  function (err, result) {
   if (err) {
    console.log(err);
    res.status(400).json({ error: res.message });
    return;
   }
   res.json(data);
  },
 );
});

app.delete('/api/menu/:id', (req, res, next) => {
 db.run('DELETE FROM menu WHERE id = ?', req.params.id, function (err, result) {
  if (err) {
   res.status(400).json({ error: res.message });
   return;
  }
  res.json({ message: 'deleted', changes: this.changes });
 });
});

app.use(function (req, res) {
 res.status(404);
});
