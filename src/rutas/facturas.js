const express = require('express');
const router = express.Router();

const pool = require('../database');


router.get('/taller/facturas', (req, res) => {
    pool.query('SELECT * FROM facturas', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get('/taller/facturas/:id', (req, res) => {
    const { id } = req.params;
    pool.query('SELECT * FROM facturas WHERE id_factura= ?', [id], (err, rows, fields) => {
        if(!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

router.post('/taller/facturas', (req, res) => {
    const { fecha, total, subtotal, descuento, id_servicio, id_cliente } = req.body;
    pool.query('INSERT INTO facturas ( `fecha`, `total`, `subtotal`, `descuento`, `id_servicio`, `id_cliente`) VALUES (?, ?, ?, ?, ?, ?)', [fecha, total, subtotal, descuento, id_servicio, id_cliente], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'factura agregado'});
        } else {
            console.log(err);
        }
    });
});


module.exports = router;