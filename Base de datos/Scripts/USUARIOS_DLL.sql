CREATE TABLE USUARIOS(
    ID_USUARIO        VARCHAR2(30)    NOT NULL, 
    NOMBRE            VARCHAR2(50)   NOT NULL, 
    APELLIDO_PATERNO  VARCHAR2(50)  NOT NULL,
    CONTRASENA        VARCHAR2(255) NOT NULL,
    ESTADO            VARCHAR2(1)  DEFAULT 'A' NOT NULL,
    REGISTRO          DATE);
	
ALTER TABLE USUARIOS ADD CONSTRAINT PK_USUARIOS PRIMARY KEY (ID_USUARIO);

COMMENT ON COLUMN USUARIOS.ID_USUARIO IS 'Identificador del usuario (llave primaria)';
COMMENT ON COLUMN USUARIOS.NOMBRE IS 'Nombre(s) del usuario';
COMMENT ON COLUMN USUARIOS.APELLIDO_PATERNO IS 'Apellido paterno del usuario';
COMMENT ON COLUMN USUARIOS.CONTRASENA IS 'Cadena cifrada que se corresponde con la contraseña del usuario';
COMMENT ON COLUMN USUARIOS.ESTADO IS 'Estatus del registro en el catálogo  A - Activo, I - Inactivo';
COMMENT ON COLUMN USUARIOS.REGISTRO IS 'Fecha de registro de nueva entrada al catálogo';
