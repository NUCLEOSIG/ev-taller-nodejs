const express = require('express');
const router = express.Router();

const pool = require('../database');


router.get('/taller/almacen', (req, res) => {
    pool.query('SELECT * FROM almacen', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get('/taller/almacen/:id', (req, res) => {
    const { id } = req.params;
    pool.query('SELECT * FROM almacen WHERE id_pieza= ?', [id], (err, rows, fields) => {
        if(!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

router.post('/taller/almacen', (req, res) => {
    const { nombre, descripcion, costo, modelo, serie} = req.body;
    pool.query('INSERT INTO almacen ( `nombre`, `descripcion`, `costo`, `modelo`, `serie`) VALUES (?, ?, ?, ?, ?)', [nombre, descripcion, costo, modelo, serie], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'pieza agregada'});
        } else {
            console.log(err);
        }
    });
});


module.exports = router;