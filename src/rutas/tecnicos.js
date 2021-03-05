const express = require('express');
const router = express.Router();

/* const mysqlConnection = require('../database') */
const pool = require('../database');

router.get('/taller/tecnicos', (req, res) => {
    pool.query('SELECT * FROM tecnico', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

router.get('/taller/tecnicos/:id', (req, res) => {
    const { id } = req.params;
    pool.query('SELECT * FROM tecnico WHERE id_tecnico= ?', [id], (err, rows, fields) => {
        if(!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

router.post('/taller/tecnicos', (req, res) => {
    const { nombre, domicilio, telefono, foto } = req.body;
    pool.query('INSERT INTO tecnico ( `nombre`, `domicilio`, `telefono`, `foto`) VALUES (?, ?, ?, ?)', [nombre, domicilio, telefono, foto], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Tecnico agregado'});
        } else {
            console.log(err);
        }
    });
});

/* router.put('/taller/tecnicos/:id', (req, res) => {
    const { nombre, domicilio, telefono, foto } = req.body;
    const { id } = req.params;
    mysqlConnection.query(`UPDATE tecnico SET nombre='${nombre}', domicilio='${domicilio}', telefono='${telefono}', foto='${foto}', WHERE id_tecnico= ?`, [id],  (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'Tecnico actualizado'});
        } else {
            console.log(err);
        }
    });
}); */
  



module.exports = router;