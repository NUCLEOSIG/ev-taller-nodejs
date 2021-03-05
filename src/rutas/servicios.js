const express = require('express');
const router = express.Router();

const pool = require('../database');


router.get('/taller/servicios', (req, res) => {
    pool.query('SELECT * FROM servicios', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get('/taller/servicios/:id', (req, res) => {
    const { id } = req.params;
    pool.query('SELECT * FROM servicios WHERE id_servicio= ?', [id], (err, rows, fields) => {
        if(!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

router.post('/taller/servicios', (req, res) => {
    const { fe_ingreso, fe_salida, diagnostico, costo, id_equipo, id_cliente } = req.body;
    pool.query('INSERT INTO servicios ( `fe_ingreso`, `fe_salida`, `diagnostico`, `costo`, `id_equipo`, `id_cliente`) VALUES (?, ?, ?, ?, ?, ?)', [fe_ingreso, fe_salida, diagnostico, costo, id_equipo, id_cliente], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'servicio agregado'});
        } else {
            console.log(err);
        }
    });
});


module.exports = router;