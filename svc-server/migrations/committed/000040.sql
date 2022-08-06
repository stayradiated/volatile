--! Previous: sha1:2c781e2d6bc8a86c3557c9258d5aa9f82a6d79f9
--! Hash: sha1:50a7861a553fc3c61f638128ace7cf577c5ce791

DROP TABLE IF EXISTS "request";
CREATE TABLE "request"(
  uid UUID NOT NULL,

  method TEXT NOT NULL,
  url TEXT NOT NULL,
  request_at TIMESTAMPTZ NOT NULL,
  request_headers JSONB NULL,
  request_body TEXT NULL,
  response_at TIMESTAMPTZ NULL,
  response_status INTEGER NULL,
  response_headers JSONB NULL,
  response_body TEXT NULL,
  response_body_at TIMESTAMPTZ NULL,

  PRIMARY KEY (uid)
);
