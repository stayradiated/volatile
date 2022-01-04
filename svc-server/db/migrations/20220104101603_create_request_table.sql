-- migrate:up
CREATE TABLE kc.request(
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

-- migrate:down
DROP TABLE kc.request;
