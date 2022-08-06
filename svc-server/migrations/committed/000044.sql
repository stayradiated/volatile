--! Previous: sha1:a719d9b8e5bb039d1dd1ed3c2b47e856595caa39
--! Hash: sha1:6f13a4a4f21349dd95122e0c1a13fdeff4f70e16

ALTER TABLE IF EXISTS customer RENAME TO stripe_customer;

-- https://stripe.com/docs/api/products/object
DROP TABLE IF EXISTS stripe_product CASCADE;
CREATE TABLE stripe_product (
  id TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,

  active BOOLEAN NOT NULL,
  name TEXT NOT NULL,
  description TEXT,

  PRIMARY KEY(id)
);

-- https://stripe.com/docs/api/prices/object
DROP TABLE IF EXISTS stripe_price CASCADE;
CREATE TABLE stripe_price (
  id TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,

  product_id TEXT NOT NULL,

  active BOOLEAN NOT NULL,
  currency CHAR(3) NOT NULL,
  nickname TEXT,

  type TEXT NOT NULL,

  recurring_aggregate_usage TEXT,
  recurring_interval TEXT,
  recurring_interval_count INTEGER,
  recurring_usage_type TEXT,

  billing_scheme TEXT NOT NULL,
  unit_amount INTEGER,

  PRIMARY KEY(id),
  FOREIGN KEY(product_id) REFERENCES stripe_product(id)
);

-- https://stripe.com/docs/api/subscriptions/object
DROP TABLE IF EXISTS stripe_subscription;
CREATE TABLE stripe_subscription (
  id TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,

  customer_id TEXT NOT NULL,
  price_id TEXT NOT NULL,
  quantity INTEGER NOT NULL,

  cancel_at TIMESTAMPTZ,
  canceled_at TIMESTAMPTZ,
  cancel_at_period_end BOOLEAN NOT NULL,
  current_period_end TIMESTAMPTZ NOT NULL,
  current_period_start TIMESTAMPTZ NOT NULL,
  description TEXT,
  status TEXT NOT NULL,

  PRIMARY KEY(id),
  FOREIGN KEY(customer_id) REFERENCES stripe_customer(customer_id),
  FOREIGN KEY(price_id) REFERENCES stripe_price(id)
);

DROP TABLE IF EXISTS stripe_payment_method;
CREATE TABLE stripe_payment_method (
  id TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,

  PRIMARY KEY(id)
);

DROP TABLE IF EXISTS stripe_invoice;
CREATE TABLE stripe_invoice (
  id TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  updated_at TIMESTAMPTZ NOT NULL,

  charge_id TEXT NOT NULL,
  customer_id TEXT NOT NULL,

  auto_advance BOOLEAN NOT NULL,
  collection_method TEXT NOT NULL,
  currency TEXT NOT NULL,
  description TEXT,
  hosted_invoice_url TEXT,

  PRIMARY KEY(id)
);
