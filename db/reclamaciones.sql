-- ===========================================================================
-- Libro de Reclamaciones (INDECOPI · Ley 29571) — VanguardiaMax
-- Ejecútalo en phpMyAdmin (Hostinger) sobre la BD: u911476768_vanguardiamax
-- ===========================================================================

CREATE TABLE IF NOT EXISTS `reclamaciones` (
  `id`                 BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `codigo`             VARCHAR(30)  NOT NULL,                 -- R-AAAAMMDD-000001
  `fecha`              DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,

  -- Consumidor reclamante
  `con_nombre`         VARCHAR(200) NOT NULL,
  `con_doc_tipo`       VARCHAR(20)  NOT NULL,                 -- DNI/CE/Pasaporte/RUC
  `con_doc_num`        VARCHAR(30)  NOT NULL,
  `con_domicilio`      VARCHAR(300) NULL,
  `con_telefono`       VARCHAR(40)  NULL,
  `con_email`          VARCHAR(200) NULL,
  `con_menor`          TINYINT(1)   NOT NULL DEFAULT 0,       -- 1 = menor de edad
  `apo_nombre`         VARCHAR(200) NULL,                     -- apoderado (si menor)

  -- Identificación del bien contratado
  `bien_tipo`          ENUM('producto','servicio') NOT NULL DEFAULT 'servicio',
  `bien_monto`         DECIMAL(10,2) NULL,
  `bien_descripcion`   VARCHAR(500) NULL,

  -- Detalle de la reclamación
  `tipo`               ENUM('reclamo','queja') NOT NULL,
  `detalle`            TEXT NOT NULL,
  `pedido`             TEXT NULL,

  -- Gestión interna
  `estado`             ENUM('pendiente','atendido') NOT NULL DEFAULT 'pendiente',
  `respuesta`          TEXT NULL,
  `created_at`         DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,

  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_reclamaciones_codigo` (`codigo`),
  KEY `idx_reclamaciones_estado` (`estado`, `fecha`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
