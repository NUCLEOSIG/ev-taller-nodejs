const express = require('express');
const router = express.Router();

const pool = require('../database');


router.get('/api/taller/clientes', (req, res) => {
    pool.query('SELECT * FROM cliente', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get('/api/taller/clientes/:id', (req, res) => {
    const { id } = req.params;
    pool.query('SELECT * FROM cliente WHERE id_cliente= ?', [id], (err, rows, fields) => {
        if(!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

router.post('/api/taller/clientes', (req, res) => {
    const { nombre, domicilio, telefono, rfc, email, foto } = req.body;
    pool.query('INSERT INTO cliente ( `nombre`, `domicilio`, `telefono`, `rfc`, `email`, `foto`) VALUES (?, ?, ?, ?, ?, ?)', [nombre, domicilio, telefono, rfc, email, foto], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'cliente agregado'});
        } else {
            console.log(err);
        }
    });
});

/* router.put('/taller/clientes/:id', (req, res) => {
    const { nombre, domicilio, telefono, foto } = req.body;
    const { id } = req.params;
    mysqlConnection.query(`UPDATE cliente SET nombre='${nombre}', domicilio='${domicilio}', telefono='${telefono}', foto='${foto}', WHERE id_tecnico= ?`, [id],  (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'cliente actualizado'});
        } else {
            console.log(err);
        }
    });
}); */
 


module.exports = router;