--! Previous: sha1:9005e1eea74a9e8167d1752a9928bd05ba84db10
--! Hash: sha1:9d889344f2e6908f8e3ad6445e10e047cd4a74e7

DROP TABLE IF EXISTS "customer";
CREATE TABLE "customer" (
  user_uid UUID NOT NULL,
  customer_id VARCHAR(32) NOT NULL,

  PRIMARY KEY(user_uid),
  CONSTRAINT unique_customer_id UNIQUE(customer_id)
);
