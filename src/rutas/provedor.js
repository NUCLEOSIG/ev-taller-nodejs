const express = require('express');
const router = express.Router();

const pool = require('../database');


router.get('/api/taller/provedor', (req, res) => {
    pool.query('SELECT * FROM cliente', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get('/api/taller/provedor/:id', (req, res) => {
    const { id } = req.params;
    pool.query('SELECT * FROM provedor WHERE id_provedor= ?', [id], (err, rows, fields) => {
        if(!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

router.post('/api/taller/provedor', (req, res) => {
    const { nombre, domicilio, telefono, n_cuenta, rfc } = req.body;
    pool.query('INSERT INTO provedor ( `nombre`, `domicilio`, `telefono`, `n_cuenta`, `rfc`) VALUES (?, ?, ?, ?, ?, ?)', [nombre, domicilio, telefono, n_cuenta, rfc], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'provedor agregado'});
        } else {
            console.log(err);
        }
    });
});


module.exports = router;