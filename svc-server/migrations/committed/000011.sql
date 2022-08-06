--! Previous: sha1:0ec17893a40e91b21f34af1e8994804e7d0d8ab6
--! Hash: sha1:1e48ca58dea5f0c0f2d3df3f037b1cf28b6b9caf

DROP TABLE IF EXISTS "user_device";
CREATE TABLE "user_device" (
  uid UUID NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,
  accessed_at TIMESTAMPTZ NOT NULL,
  user_uid UUID NOT NULL,
  name TEXT NOT NULL,
  device_id_hash TEXT NOT NULL,
  trusted BOOLEAN NOT NULL,

  PRIMARY KEY(uid),
  CONSTRAINT unique_user_device_user_uid_device_id_hash UNIQUE(user_uid, device_id_hash),
  CONSTRAINT fk_user_device_user
    FOREIGN KEY(user_uid) REFERENCES "user"(uid)
    ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS "user_2fa";
CREATE TABLE "user_2fa" (
  uid UUID NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,
  user_uid UUID NOT NULL,
  name TEXT NOT NULL,
  secret_encrypted TEXT NOT NULL,
  secret_keyring_id SMALLINT NOT NULL,

  PRIMARY KEY(uid),
  CONSTRAINT unique_user_2fa_user_uid UNIQUE(user_uid),
  CONSTRAINT fk_user_2fa_user
    FOREIGN KEY(user_uid) REFERENCES "user"(uid)
    ON DELETE CASCADE ON UPDATE CASCADE
);

DROP TABLE IF EXISTS "user_password_reset";
CREATE TABLE "user_password_reset" (
  uid UUID NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  user_uid UUID NOT NULL,
  secret_hash TEXT NOT NULL,

  PRIMARY KEY(uid),
  CONSTRAINT unique_user_password_reset_secret_hash UNIQUE(secret_hash),
  CONSTRAINT fk_user_password_reset_user
    FOREIGN KEY(user_uid) REFERENCES "user"(uid)
    ON DELETE CASCADE ON UPDATE CASCADE
);
