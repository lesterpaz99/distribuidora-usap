CREATE DATABASE IF NOT EXISTS distribuidora;

USE distribuidora;

CREATE TABLE cliente (
    cli_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR (100) NOT NULL,
    direccion VARCHAR(255),
    fecha_nacimiento TIMESTAMP,
    telefono VARCHAR(100),
    email VARCHAR(100) UNIQUE
);

CREATE TABLE empleado (
    emp_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR (100) NOT NULL,
    direccion VARCHAR(255),
    fecha_nacimiento DATETIME,
    telefono VARCHAR(100),
    email VARCHAR(100) UNIQUE
);

CREATE TABLE cajero (
    caje_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    emp_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (emp_id) REFERENCES empleado (emp_id)
);

CREATE TABLE factura (
    num_fac INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    cli_id INT UNSIGNED NOT NULL,
    caje_id INT UNSIGNED NOT NULL,
    impuesto DECIMAL NOT NULL,
    subtotal DECIMAL NOT NULL,
    total DECIMAL NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cli_id) REFERENCES cliente(cli_id),
    FOREIGN KEY (caje_id) REFERENCES cajero (caje_id)
);

/*  CREATE FUNCTION getIHSSContribution(emp_salar DECIMAL) RETURNS DECIMAL     
    BEGIN 
      DECLARE attr DECIMAL;
      
      IF emp_salar >  10000
        THEN SET attr = emp_salar * 2.5%;
      ELSE
        SET attr = 503.3;
      END IF; 
  
    RETURN attr; 
    END 
*/

CREATE TABLE detalle (
    det_id INT UNSIGNED AUTO_INCREMENT,
    cli_id INT UNSIGNED NOT NULL,
    num_fac INT UNSIGNED NOT NULL,
    PRIMARY KEY (det_id),
    FOREIGN KEY (cli_id) REFERENCES cliente (cli_id),
    FOREIGN KEY (num_fac) REFERENCES factura (num_fac)
);

CREATE TABLE bodega (
    bod_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    direccion VARCHAR(255)
);

CREATE TABLE articulo (
    arti_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion TEXT,
    precio DECIMAL NOT NULL,
    cli_id INT UNSIGNED NOT NULL,
    bod_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (cli_id) REFERENCES cliente (cli_id),
    FOREIGN KEY (bod_id) REFERENCES bodega (bod_id)
);

CREATE TABLE proveedor (
    prov_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR (100) NOT NULL,
    direccion VARCHAR(255),
    telefono VARCHAR(100),
    email VARCHAR(100) UNIQUE
);

CREATE TABLE orden_entrega (
    ord_ent_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    fecha_entrega TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    arti_id INT UNSIGNED NOT NULL,
    prov_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (arti_id) REFERENCES articulo (arti_id),
    FOREIGN KEY (prov_id) REFERENCES proveedor (prov_id)
);