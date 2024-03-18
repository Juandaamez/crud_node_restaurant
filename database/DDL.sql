CREATE TABLE empleados (
    idempleado SERIAL PRIMARY KEY,
    nombres VARCHAR(30),
    primerapellido VARCHAR(30),
    segundoapellido VARCHAR(30),
    clavejefe INT4 
);

ALTER TABLE empleados ADD CONSTRAINT FK_EMPLEADOS_JEFE
FOREIGN KEY (clavejefe) REFERENCES empleados (idempleado);