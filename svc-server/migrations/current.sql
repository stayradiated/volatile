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
