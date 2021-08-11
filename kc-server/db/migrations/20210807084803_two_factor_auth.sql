-- migrate:up
CREATE TABLE kc.user_device (
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
    FOREIGN KEY(user_uid) REFERENCES kc.user(uid)
    ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE kc.user_2fa (
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
    FOREIGN KEY(user_uid) REFERENCES kc.user(uid)
    ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE kc.user_password_reset (
  uid UUID NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  user_uid UUID NOT NULL,
  secret_hash TEXT NOT NULL,

  PRIMARY KEY(uid),
  CONSTRAINT unique_user_password_reset_secret_hash UNIQUE(secret_hash),
  CONSTRAINT fk_user_password_reset_user
    FOREIGN KEY(user_uid) REFERENCES kc.user(uid)
    ON DELETE CASCADE ON UPDATE CASCADE
);

-- migrate:down
DROP TABLE kc.user_password_reset;
DROP TABLE kc.user_2fa;
DROP TABLE kc.user_device;
