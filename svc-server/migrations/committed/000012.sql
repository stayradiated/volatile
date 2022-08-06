--! Previous: sha1:1e48ca58dea5f0c0f2d3df3f037b1cf28b6b9caf
--! Hash: sha1:ea4fcbc4369461b3d745c282b432f1692b67dde2

DROP TABLE IF EXISTS "user_email_verify";
CREATE TABLE "user_email_verify" (
  uid UUID NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,
  user_uid UUID NOT NULL,
  secret_hash TEXT NOT NULL,

  PRIMARY KEY(uid),
  CONSTRAINT unique_user_email_verify_user_uid UNIQUE(user_uid),
  CONSTRAINT unique_user_email_verify_secret_hash UNIQUE(secret_hash)
);

ALTER TABLE "user" DROP COLUMN IF EXISTS email_verified;
ALTER TABLE "user" ADD COLUMN email_verified BOOLEAN;
UPDATE "user" SET email_verified = FALSE;
ALTER TABLE "user" ALTER COLUMN email_verified SET NOT NULL;
