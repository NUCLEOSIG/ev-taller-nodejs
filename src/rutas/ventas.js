const express = require('express');
const router = express.Router();

const pool = require('../database');


router.get('/taller/ventas', (req, res) => {
    pool.query('SELECT * FROM ventas', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get('/taller/ventas/:id', (req, res) => {
    const { id } = req.params;
    pool.query('SELECT * FROM ventas WHERE id_venta= ?', [id], (err, rows, fields) => {
        if(!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

router.post('/taller/ventas', (req, res) => {
    const { id_pieza, id_servicio, modelo, serie } = req.body;
    pool.query('INSERT INTO ventas ( `id_pieza`, `id_servicio`, `modelo`, `serie`) VALUES (?, ?, ?, ?)', [id_pieza, id_servicio, modelo, serie], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'venta agregado'});
        } else {
            console.log(err);
        }
    });
});


module.exports = router;