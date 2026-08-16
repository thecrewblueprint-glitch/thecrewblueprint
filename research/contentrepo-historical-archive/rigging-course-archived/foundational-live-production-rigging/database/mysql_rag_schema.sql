-- MySQL RAG staging schema for The Crew Blueprint content repository
-- Content unit: foundational-live-production-rigging
-- Data outflow is not final; this schema is normalized staging, not final LMS schema.
-- Duplicate policy: exact SHA-256 duplicates should use one canonical asset plus alias rows.

CREATE TABLE IF NOT EXISTS content_units (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  content_unit_id VARCHAR(191) NOT NULL UNIQUE,
  title VARCHAR(255) NOT NULL,
  program VARCHAR(191),
  domain_name VARCHAR(191),
  discipline VARCHAR(191),
  content_type VARCHAR(191),
  audience TEXT,
  data_outflow_status VARCHAR(191) DEFAULT 'unconfirmed',
  metadata_json JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS content_assets (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  content_unit_id VARCHAR(191) NOT NULL,
  asset_path TEXT NOT NULL,
  asset_role VARCHAR(191),
  extension VARCHAR(64),
  size_bytes BIGINT UNSIGNED,
  sha256 CHAR(64),
  metadata_json JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_content_assets_unit (content_unit_id),
  INDEX idx_content_assets_sha256 (sha256),
  UNIQUE KEY uq_content_asset_sha_path (content_unit_id, sha256, asset_path(255))
);

CREATE TABLE IF NOT EXISTS asset_aliases (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  content_unit_id VARCHAR(191) NOT NULL,
  canonical_asset_sha256 CHAR(64) NOT NULL,
  canonical_asset_path TEXT NOT NULL,
  duplicate_asset_path TEXT NOT NULL,
  duplicate_filename VARCHAR(255),
  reason VARCHAR(191) DEFAULT 'exact_sha256_duplicate',
  metadata_json JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_asset_alias_unit (content_unit_id),
  INDEX idx_asset_alias_sha256 (canonical_asset_sha256)
);

CREATE TABLE IF NOT EXISTS slide_timing_chunks (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  content_unit_id VARCHAR(191) NOT NULL,
  module_id VARCHAR(191),
  slide_number INT UNSIGNED NOT NULL,
  title VARCHAR(255),
  start_time VARCHAR(32),
  end_time VARCHAR(32),
  asset_path TEXT,
  rag_text TEXT NOT NULL,
  metadata_json JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_slide_unit (content_unit_id),
  INDEX idx_slide_number (slide_number)
);

CREATE TABLE IF NOT EXISTS rag_chunks (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  content_unit_id VARCHAR(191) NOT NULL,
  source_record_type VARCHAR(191),
  source_record_id VARCHAR(191),
  chunk_text MEDIUMTEXT NOT NULL,
  embedding_model VARCHAR(191),
  embedding_vector JSON,
  metadata_json JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_rag_unit (content_unit_id),
  FULLTEXT INDEX ft_rag_chunk_text (chunk_text)
);
