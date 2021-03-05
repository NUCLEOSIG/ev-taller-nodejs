const express = require('express');
const app = express();




app.set('port', process.env.PORT || 3000);



app.use(express.json());




app.use(require('./rutas/tecnicos'));
app.use(require('./rutas/clientes'));
app.use(require('./rutas/almacen'));
app.use(require('./rutas/almacen_provedor'));
app.use(require('./rutas/equipo'));
app.use(require('./rutas/facturas'));
app.use(require('./rutas/pagos'));
app.use(require('./rutas/pedidos'));
app.use(require('./rutas/provedor'));
app.use(require('./rutas/servicio_tecnico'));
app.use(require('./rutas/servicios'));
app.use(require('./rutas/ventas'));





app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto ', app.get('port'));
});