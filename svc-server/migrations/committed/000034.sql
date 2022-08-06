--! Previous: sha1:54a71d21d009464a3dd6f9f7f023c0dd2848a041
--! Hash: sha1:7d057867b12e306858e27e4a02931d988f31ab29

ALTER TABLE "user_exchange_request" DROP COLUMN IF EXISTS request_headers;
ALTER TABLE "user_exchange_request" ADD COLUMN request_headers JSONB NULL;
