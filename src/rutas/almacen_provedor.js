const express = require('express');
const router = express.Router();

const pool = require('../database');


router.get('/taller/almacen_provedor', (req, res) => {
    pool.query('SELECT * FROM almacen_provedor', (err, rows, fields) => {
        if(!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});



router.post('/taller/almacen_provedor', (req, res) => {
    const { id_pieza, id_provedor } = req.body;
    pool.query('INSERT INTO almacen_provedor ( `id_pieza`, `id_provedor`) VALUES (?, ?)', [id_pieza, id_provedor], (err, rows, fields) => {
        if(!err) {
            res.json({Status: 'dato agregado'});
        } else {
            console.log(err);
        }
    });
});


module.exports = router;