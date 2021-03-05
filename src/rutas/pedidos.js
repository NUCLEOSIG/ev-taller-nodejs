const express = require('express');
const router = express.Router();

const pool = require('../database');


router.get('/api/taller/pedidos', (req, res) => {
    pool.query('SELECT * FROM pedidos', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get('/api/taller/pedidos/:id', (req, res) => {
    const { id } = req.params;
    pool.query('SELECT * FROM pedidos WHERE id_pedido= ?', [id], (err, rows, fields) => {
        if(!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

router.post('/api/taller/pedidos', (req, res) => {
    const { fecha, cantidad, id_pieza } = req.body;
    pool.query('INSERT INTO pedidos ( `fecha`, `cantidad`, `id_pieza`) VALUES (?, ?, ?)', [fecha, cantidad, id_pieza], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'pedido agregado'});
        } else {
            console.log(err);
        }
    });
});


module.exports = router;