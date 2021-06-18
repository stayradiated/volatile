-- migrate:up
create table market_price(
  id UUID primary key,
  created_at timestamptz,
  updated_at timestamptz,
  date timestamptz,
  market_name varchar,
  price float
);


-- migrate:down
drop table market_price;

