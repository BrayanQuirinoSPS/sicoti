CREATE TABLE ROLES(
    ID_ROL        NUMBER(3)    NOT NULL, 
    ROL           VARCHAR2(20) NOT NULL,
    ESTADO        VARCHAR2(1)  DEFAULT 'A' NOT NULL,
    REGISTRO      DATE);
	
ALTER TABLE ROLES ADD CONSTRAINT PK_ROLES PRIMARY KEY (ID_ROL);

COMMENT ON COLUMN ROLES.ID_ROL IS 'Identificador del catálogo (llave primaria)';
COMMENT ON COLUMN ROLES.ROL IS 'Nombre asignado al rol';
COMMENT ON COLUMN ROLES.ESTADO IS 'Estatus del registro en el catálogo  A - Activo, I - Inactivo';
COMMENT ON COLUMN ROLES.REGISTRO IS 'Fecha de registro de nueva entrada al catálogo';
