--! Previous: sha1:903207ffa087fb73a56dc479a00fad3f0972a2b5
--! Hash: sha1:4e6c3860280f311021b744981389e41fdd44f5b1

CREATE OR REPLACE FUNCTION column_exists (
  ptable text,
  pcolumn text,
  pschema text DEFAULT 'public'
) RETURNS boolean LANGUAGE SQL STABLE STRICT AS $BODY$
  SELECT EXISTS (
    SELECT NULL
    FROM information_schema.columns
    WHERE
      table_name = ptable
      AND column_name = pcolumn
      AND table_schema = pschema);
$BODY$;

CREATE OR REPLACE PROCEDURE rename_column_if_exists (
  ptable TEXT, 
  pcolumn TEXT,
  new_name TEXT,
  pschema text DEFAULT 'public'
) LANGUAGE plpgsql AS $$ BEGIN
  IF column_exists (ptable, pcolumn, pschema) THEN
    EXECUTE FORMAT(
      'ALTER TABLE %I.%I RENAME COLUMN %I TO %I;',
      pschema, ptable, pcolumn, new_name);
  END IF;
END $$;


CALL rename_column_if_exists('dca_order', 'min_price', 'min_price_nzd');
CALL rename_column_if_exists('dca_order', 'max_price', 'max_price_nzd');
CALL rename_column_if_exists('dca_order', 'min_amount', 'min_amount_nzd');
CALL rename_column_if_exists('dca_order', 'max_amount', 'max_amount_nzd');
CALL rename_column_if_exists('dca_order_history', 'market_price', 'market_price_nzd');
CALL rename_column_if_exists('order', 'price', 'price_nzd');
