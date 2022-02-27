#!/bin/bash

set -euo pipefail

# run database migrations
dbmate \
  --migrations-dir='/migrations' \
  --url="${DATABASE_URL}?sslmode=disable&search_path=kc" \
  migrate

# start server.js
env --ignore-environment \
  HOME="$HOME" \
  NODE_ENV="production" \
  DEBUG="*" \
  PORT="7946" \
  BCRYPT_SALT_ROUNDS=10 \
  BASE_URL="$BASE_URL" \
  DATABASE_URL="$DATABASE_URL" \
  KEYRING="$KEYRING" \
  ACTIONS_SECRET="$ACTIONS_SECRET" \
  DIGEST_SALT="$DIGEST_SALT" \
  JWT_SECRET="$JWT_SECRET" \
  STRIPE_API_KEY="$STRIPE_API_KEY" \
  STRIPE_PUBLISHABLE_KEY="$STRIPE_PUBLISHABLE_KEY" \
  STRIPE_WEBHOOK_SECRET="$STRIPE_WEBHOOK_SECRET" \
  DASSET_API_KEY="$DASSET_API_KEY" \
  DASSET_ACCOUNT_ID="$DASSET_ACCOUNT_ID" \
  OPEN_EXCHANGE_RATES_APP_ID="$OPEN_EXCHANGE_RATES_APP_ID" \
  MAIL_SMTP_URL="$MAIL_SMTP_URL" \
  MAIL_FROM="$MAIL_FROM" \
  /usr/local/bin/node /server/server.js &

# start hasura
env --ignore-environment \
  HOME="$HOME" \
  HASURA_ACTIONS_ENDPOINT="http://localhost:7946" \
  HASURA_GRAPHQL_DATABASE_URL="$DATABASE_URL" \
  HASURA_GRAPHQL_ADMIN_SECRET="$HASURA_GRAPHQL_ADMIN_SECRET" \
  HASURA_GRAPHQL_JWT_SECRET="{\"type\":\"HS256\",\"key\":\"${JWT_SECRET}\",\"claims_format\":\"json\"}" \
  HASURA_ACTIONS_SECRET="$ACTIONS_SECRET" \
  HASURA_GRAPHQL_ENABLE_CONSOLE="true" \
  HASURA_GRAPHQL_ENABLE_TELEMETRY="false" \
  HASURA_GRAPHQL_DEV_MODE="false" \
  HASURA_GRAPHQL_ENABLED_LOG_TYPES="startup, http-log, webhook-log, websocket-log, query-log" \
  HASURA_GRAPHQL_UNAUTHORIZED_ROLE="guest" \
  /bin/docker-entrypoint.sh graphql-engine serve --server-port 7947 &

exec nginx 
