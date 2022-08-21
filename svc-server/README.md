# volatile/server

```bash
# start hasura/postgres
docker compose up

# start server
pnpm run start

# start web client
../web
pnpm run dev
```

## Hasura

Use Hasura when possible.

## Naming conventions

- `ID` and `UID` are always captialised.

### Actions

Action verbs should match CRUD names, as `createOrder`, `readOrder`,
`updateOrder` and `destroyOrder`.

### Models

Model verbs should match SQL names, such as `insertOrder`, `selectOrder` and
`updateOrder`.
