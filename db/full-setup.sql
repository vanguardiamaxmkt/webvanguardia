-- ===========================================================================
-- SETUP COMPLETO DE BASE DE DATOS — VanguardiaMax
-- ---------------------------------------------------------------------------
-- Cómo usarlo:
--   1) En hPanel crea (o reutiliza) una base de datos y asigna el usuario
--      u911476768_adminvangu con TODOS los privilegios.
--   2) Abre phpMyAdmin, selecciona ESA base en la barra izquierda.
--   3) Pestaña "SQL" -> pega TODO este archivo -> "Continuar".
--
-- Recrea ambas tablas del sitio: articulos (blog) + reclamaciones (INDECOPI).
-- Es idempotente: si las tablas ya existen, no las borra ni duplica.
-- ===========================================================================

-- ---------------------------------------------------------------------------
-- 1) BLOG / ARTÍCULOS
-- ---------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS `articulos` (
  `id`               BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `slug`             VARCHAR(200)  NOT NULL,                 -- URL: /articulos/<slug>
  `title`            VARCHAR(255)  NOT NULL,                 -- título (H1)
  `excerpt`          VARCHAR(500)  NULL,                     -- resumen / bajada
  `content`          LONGTEXT      NULL,                     -- HTML del editor
  `cover_image`      VARCHAR(500)  NULL,                     -- ruta /img/...
  `category`         VARCHAR(120)  NULL,
  `tags`             VARCHAR(500)  NULL,                     -- separados por coma
  `author`           VARCHAR(120)  NULL,
  `status`           ENUM('borrador','publicado') NOT NULL DEFAULT 'borrador',

  -- SEO (estilo Yoast)
  `focus_keyword`    VARCHAR(160)  NULL,                     -- palabra clave objetivo
  `meta_title`       VARCHAR(255)  NULL,                     -- title SEO (si difiere)
  `meta_description` VARCHAR(320)  NULL,                     -- meta description
  `og_image`         VARCHAR(500)  NULL,                     -- imagen para redes (OG)
  `canonical_url`    VARCHAR(500)  NULL,
  `noindex`          TINYINT(1)    NOT NULL DEFAULT 0,       -- 1 = no indexar

  -- fechas
  `published_at`     DATETIME      NULL,
  `created_at`       DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at`       DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP
                                   ON UPDATE CURRENT_TIMESTAMP,

  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_articulos_slug` (`slug`),
  KEY `idx_articulos_status_pub` (`status`, `published_at`),
  KEY `idx_articulos_category` (`category`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ---------------------------------------------------------------------------
-- 2) LIBRO DE RECLAMACIONES (INDECOPI · Ley 29571)
-- ---------------------------------------------------------------------------
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

-- ===========================================================================
-- FIN. Al terminar deberías ver 2 tablas: `articulos` y `reclamaciones`.
-- ===========================================================================
