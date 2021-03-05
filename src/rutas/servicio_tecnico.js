const express = require('express');
const router = express.Router();

const pool = require('../database');


router.get('/taller/servicio_tecnico', (req, res) => {
    pool.query('SELECT * FROM servicio_tecnico', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});


router.post('/taller/servicio_tecnico', (req, res) => {
    const { id_servicio, id_tecnico } = req.body;
    pool.query('INSERT INTO servicio_tecnico ( `id_servicio`, `id_tecnico`) VALUES (?, ?)', [id_servicio, id_tecnico], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'dato agregado'});
        } else {
            console.log(err);
        }
    });
});


module.exports = router;