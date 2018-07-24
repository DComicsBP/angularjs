var express = require('express');
var mysql = require('mysql');
var app = express(); var cors = require('cors');

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'lista_telefonica'
});


//sessão dos contatos
var contatos = [];
var contato; 
app.get('/contatos/:id', function (req, res, next) {
  for (var i = 0; i < result.length; i++) {
    contato.push(result[i]);
  }
  
  console.log(contato); 
});

con.connect(function (err) {
  var sql = "SELECT O.Nome as Operadora, Cor.Nome as Cor,C.Nome, C.Telefone, C.Selecionado FROM CONTATOS AS C INNER JOIN OPERADORAS AS O ON O.ID = C.OPERADORA INNER JOIN CORES AS COR ON COR.ID = C.Cor;";

  if (err) throw err;
  con.query(sql, function (err, result, fields) {
    for (var i = 0; i < result.length; i++) {
      contatos.push(result[i]);
    }
    console.log(contatos);
    app.get('/contatos', function (req, res) {
      res.json(contatos);
    });

  });
});

/*
con.connect(function (err, id) {
  var sql = "SELECT O.Nome as Operadora, Cor.Nome as Cor,C.Nome, C.Telefone, C.Selecionado FROM CONTATOS AS C INNER JOIN OPERADORAS AS O ON O.ID = C.OPERADORA INNER JOIN CORES AS COR ON COR.ID = C.Cor WHERE ID= :id;";

  con.query(sql, function (err, result, fields) {
    for (var i = 0; i < result.length; i++) {
      contatos.push(result[i]);
    }
    console.log(contatos);
    app.get('/contatos/:id', function (req, res) {
      res.json(contatos);
    });

  });
});*/

/*app.delete('/contatos/:id', function (req, res) {
con.connect(function (err, ID) {
    var sql = "DELETE FROM contatos WHERE ID = :id";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(req.body.id);

    });
    console.log("Number of records deleted: " + result.affectedRows);
  });
});*/

// sessão operadoras
var operadoras = [];
con.connect(function (err) {
  var sql = "SELECT * FROM OPERADORAS";

  con.query(sql, function (err, result, fields) {
    for (var i = 0; i < result.length; i++) {
      operadoras.push(result[i]);
    }
    console.log(operadoras);
    app.get('/operadoras', function (req, res) {
      res.json(operadoras);
    });

  });
});

//sessao cores
var cores = [];
con.connect(function (err) {
  var sql = "SELECT * FROM CORES";

  con.query(sql, function (err, result, fields) {
    for (var i = 0; i < result.length; i++) {
      cores.push(result[i]);
    }
    console.log(cores);
    app.get('/cores', function (req, res) {
      res.json(cores);
    });

  });
});


app.use(cors());



app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.post('/contatos', function (req, res) {
  contatos.push(req.body);
  res.json(true);
});


app.get('/cores', function (req, res) {
  res.json(cores)
})




