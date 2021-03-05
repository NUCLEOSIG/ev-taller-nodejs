const express = require('express');
const router = express.Router();

const pool = require('../database');


router.get('/api/taller/equipo', (req, res) => {
    pool.query('SELECT * FROM equipo', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get('/api/taller/equipo/:id', (req, res) => {
    const { id } = req.params;
    pool.query('SELECT * FROM equipo WHERE id_equipo= ?', [id], (err, rows, fields) => {
        if(!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

router.post('/api/taller/equipo', (req, res) => {
    const { tipo_de_equipo, descripcion, accesorios, id_cliente } = req.body;
    pool.query('INSERT INTO equipo ( `tipo_de_equipo`, `descripcion`, `accesorios`, `id_cliente`) VALUES (?, ?, ?, ?)', [tipo_de_equipo, descripcion, accesorios, id_cliente], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'equipo agregado'});
        } else {
            console.log(err);
        }
    });
});


module.exports = router;