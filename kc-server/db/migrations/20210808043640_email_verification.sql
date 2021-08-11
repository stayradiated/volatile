-- migrate:up
CREATE TABLE kc.user_email_verify (
  uid UUID NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,
  user_uid UUID NOT NULL,
  secret_hash TEXT NOT NULL,

  PRIMARY KEY(uid),
  CONSTRAINT unique_user_email_verify_user_uid UNIQUE(user_uid),
  CONSTRAINT unique_user_email_verify_secret_hash UNIQUE(secret_hash)
);

ALTER TABLE kc.user ADD COLUMN email_verified BOOLEAN;
UPDATE kc.user SET email_verified = FALSE;
ALTER TABLE kc.user ALTER COLUMN email_verified SET NOT NULL;

-- migrate:down
DROP TABLE kc.user_email_verify;
ALTER TABLE kc.user DROP COLUMN email_verified;
