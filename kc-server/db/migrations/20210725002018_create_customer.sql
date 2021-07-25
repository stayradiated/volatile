-- migrate:up
CREATE TABLE kc.customer (
  user_uid UUID NOT NULL,
  customer_id VARCHAR(32) NOT NULL,

  PRIMARY KEY(user_uid),
  CONSTRAINT unique_customer_id UNIQUE(customer_id)
);

-- migrate:down
DROP TABLE kc.customer;
