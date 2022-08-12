--! Previous: sha1:6f13a4a4f21349dd95122e0c1a13fdeff4f70e16
--! Hash: sha1:4384cb78f3d40cbc3a0ebc7eff7ec9220e2c4bc5

DROP TABLE IF EXISTS "cron_history";

CREATE TABLE "cron_history" (
  uid UUID NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,
  task_id TEXT NOT NULL,
  input JSONB NOT NULL DEFAULT '{}'::JSONB,
  state TEXT NOT NULL DEFAULT 'PENDING',
  completed_at TIMESTAMPTZ,
  output JSONB,

  PRIMARY KEY(uid)
);
