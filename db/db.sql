use mxsigco1_taller;

create table cliente(
	id_cliente int primary key,
	nombre VARCHAR(50) NOT NULL,
	domicilio VARCHAR(50) NOT NULL,
	telefono NUMERIC NOT NULL,
	rfc VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	foto VARCHAR(50)
	);

INSERT INTO `cliente`( `nombre`, `domicilio`, `telefono`, `rfc`, `email`, `foto`) VALUES ('antonio espiritu', 'tapachula', '9622398378', 'eaer', 'correo@correo.com', 'foto');
INSERT INTO `cliente`( `nombre`, `domicilio`, `telefono`, `rfc`, `email`, `foto`) VALUES ('fernando duran', 'tapachula', '9622398378', 'eaer', 'correo@correo.com', 'foto');
INSERT INTO `cliente`( `nombre`, `domicilio`, `telefono`, `rfc`, `email`, `foto`) VALUES ('humberto zapata', 'tapachula', '9622398378', 'eaer', 'correo@correo.com', 'foto');

	
create table tecnico(
	id_tecnico int primary key NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(50) NOT NULL,
	domicilio VARCHAR(50) NOT NULL,
	telefono NUMERIC NOT NULL,
	foto VARCHAR(50) 
	);
INSERT INTO `tecnico`( `nombre`, `domicilio`, `telefono`) VALUES ('antonio espiritu', 'tapachula', '9622398378');
INSERT INTO `tecnico`( `nombre`, `domicilio`, `telefono`) VALUES ('fernando duran', 'tapachula', '9621437339');
INSERT INTO `tecnico`( `nombre`, `domicilio`, `telefono`) VALUES ('humberto zapata', 'tapachula', '9621117268');

	
create table almacen(
	id_pieza int primary key,
	nombre VARCHAR(50) NOT NULL,
	descripcion VARCHAR(50) NOT NULL,
	costo NUMERIC NOT NULL,
	modelo VARCHAR(50) NOT NULL,
	serie VARCHAR(50) NOT NULL
	);

create table provedor(
	id_provedor int primary key,
	nombre VARCHAR(50) NOT NULL,
	domicilio VARCHAR(50) NOT NULL,
	telefono NUMERIC NOT NULL,
	n_cuenta NUMERIC NOT NULL,
	rfc VARCHAR(50) NOT NULL
	);

create table almacen_provedor(
	id_pieza int REFERENCES almacen,
	id_provedor int REFERENCES provedor,
	primary key(id_pieza, id_provedor)
	);

create table equipo(
	id_equipo int primary key,
	tipo_de_equipo VARCHAR(50) NOT NULL,
	descripcion VARCHAR(50) NOT NULL,
	accesorios VARCHAR(50),
	id_cliente int REFERENCES cliente
	);


create table servicios(
	id_servicio int primary key,
	fe_ingreso date NOT NULL,
	fe_salida date,
	diagnostico text,
	costo numeric DEFAULT 100,
	id_equipo int REFERENCES equipo,
	id_cliente int REFERENCES cliente
	);


create table servicio_tecnico(
	id_servicio int REFERENCES servicios,
	id_tecnico int REFERENCES tecnico,
	primary key(id_servicio, id_tecnico)
	);

create table ventas(
	id_venta int,
	id_pieza int REFERENCES almacen,
	id_servicio int REFERENCES servicios,
	modelo VARCHAR(50) NOT NULL,
	serie VARCHAR(50) NOT NULL,
	primary key(id_venta, id_servicio)
	);

create table facturas(
	id_factura int primary key,
	fecha date NOT NULL,
	total numeric,
	subtotal numeric,
	descuento numeric,
	id_servicio int REFERENCES servicios,
	id_cliente int REFERENCES cliente
	);

create table pedidos(
	id_pedido int primary key,
	fecha date NOT NULL,
	cantidad numeric,
	id_pieza int
	);

create table pagos(
	id_pago int primary key,
	fecha date NOT NULL,
	monto numeric NOT NULL,
	id_pedido int NOT NULL,
	id_provedor int NOT NULL
	);
