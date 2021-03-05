const express = require('express');
const router = express.Router();

const pool = require('../database');


router.get('/api/taller/pagos', (req, res) => {
    pool.query('SELECT * FROM pagos', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get('/api/taller/pagos/:id', (req, res) => {
    const { id } = req.params;
    pool.query('SELECT * FROM pagos WHERE id_pago= ?', [id], (err, rows, fields) => {
        if(!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

router.post('/api/taller/pagos', (req, res) => {
    const { fecha, monto, id_pedido, id_provedor } = req.body;
    pool.query('INSERT INTO pagos ( `fecha`, `monto`, `id_pedido`, `id_provedor`) VALUES (?, ?, ?, ?)', [fecha, monto, id_pedido, id_provedor], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'pago agregado'});
        } else {
            console.log(err);
        }
    });
});


module.exports = router;