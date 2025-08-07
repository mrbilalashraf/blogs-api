const mySql = require('mysql');

const connection = mySql.createPool({
  host: 'btazkatrdojfs3vimmof-mysql.services.clever-cloud.com',
  user: 'uoc37rblzxkad2ou',
  password: 'aBDo1GOXoKagpgTr5ban',
  database: 'btazkatrdojfs3vimmof',
  port: '3306',
});

connection.getConnection((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database');
});

module.exports = connection;