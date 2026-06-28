-- ===========================================================================
-- Tabla de artículos (blog) — VanguardiaMax
-- Ejecútalo en phpMyAdmin (Hostinger) sobre la BD: u911476768_vanguardiamax
-- ===========================================================================

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
