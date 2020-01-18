const express = require('express');
const mysql = require('mysql');
const app = express();
const books = require('./controller')

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'miBase'
    
});
conexion.connect((error)=>{
    if(!!error){
        console.log('error');
    }else{
        console.log('escuchando')
    }
});
app.get('/',(req, resp)=>{
    conexion.query("SELECT * FROM  books", function(error, rows, field){
        //AQUI VA NUESTRO CALLBACK
        if(!!error){
            console.log('error el query esta vacio')
        }else
        console.log('correcto query')
        console.log(rows)
        
        resp.status(200);
        resp.json(rows)
    })
});
app.get(('/booksMysql/find'),(req, res) => {
  
  const { query } = req;
  books.findOne({where: query}).then(books => {
    return res.json(books)
  });
});
app.listen(1337)