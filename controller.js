
  const Sequelize = require('sequelize')

const sequelize = new Sequelize('miBase','root','', {
  host: 'localhost',
  dialect: 'mysql'
});

let books = sequelize.define('books', {

  title: Sequelize.STRING,
  author: Sequelize.STRING
},
{
    timestamps: false
})

module.exports = books;