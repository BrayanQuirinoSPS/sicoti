CREATE TABLE AREAS(
    ID_AREA      NUMBER(3)    NOT NULL,
    AREA         VARCHAR2(50)   NOT NULL,
    ID_USUARIO   VARCHAR2(30)   NOT NULL,
    ID_ROL       NUMBER(2) NOT NULL, 
    ESTADO       VARCHAR2(1)  DEFAULT 'A' NOT NULL,
    REGISTRO     DATE);
	
ALTER TABLE AREAS ADD CONSTRAINT PK_AREA PRIMARY KEY (ID_AREA);
ALTER TABLE AREAS ADD CONSTRAINT FK_USUARIO FOREIGN KEY ( ID_USUARIO ) REFERENCES USUARIOS ( ID_USUARIO );
ALTER TABLE AREAS ADD CONSTRAINT FK_ROL FOREIGN KEY ( ID_ROL ) REFERENCES ROLES ( ID_ROL );

COMMENT ON COLUMN AREAS.ID_AREA IS 'Identificador del catálogo, funge como llave primaria';
COMMENT ON COLUMN AREAS.AREA IS 'Nombre asignada al área';
COMMENT ON COLUMN AREAS.ID_USUARIO IS 'Identificador del usuario, funge como llave foranea';
COMMENT ON COLUMN AREAS.ID_ROL IS 'Identificador del rol de usuario, funge como llave foranea';
COMMENT ON COLUMN AREAS.ESTADO IS 'Indica el estatus del registro en el catálogo  A - Activo, I - Inactivo';
COMMENT ON COLUMN AREAS.REGISTRO IS 'Fecha de registro de nueva entrada al catálogo';
