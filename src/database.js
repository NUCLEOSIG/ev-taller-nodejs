const mysql = require('mysql');


const pool = mysql.createPool({
    host:'mxsig.com.mx',
    user:'mxsigco1_taller',
    password:'Qwsa1234/#',
    database:'mxsigco1_taller'
});

pool.getConnection((err, connection) => {
    if(err) throw err;

    console.log('La base de datos esta conectada')
})






module.exports = pool;
