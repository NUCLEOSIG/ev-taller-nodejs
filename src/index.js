const express = require('express');
const app = express();




app.set('port', process.env.PORT || 3000);



app.use(express.json());




app.use(require('./rutas/tecnicos'));
app.use(require('./rutas/clientes'));




app.listen(app.get('port'), () => {
    console.log('Servidor en el puerto ', app.get('port'));
});