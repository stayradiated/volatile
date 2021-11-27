FROM node:16.8.0 as node
FROM amacneil/dbmate:1.12.1 as dbmate
FROM hasura/graphql-engine:v2.0.10.cli-migrations-v3

WORKDIR /

# add hasusra config
COPY ./kc-hasura/metadata /hasura-metadata

# add node
COPY --from=node /usr/local /usr/local
COPY ./kc-server/dist/ncc/ /kc-server

# add dbmate + migrations
COPY --from=dbmate /usr/local/bin/dbmate /usr/local/bin/dbmate
COPY ./kc-server/db/migrations /migrations

# Run the image as a non-root user
RUN adduser --disabled-login appuser
USER appuser

COPY ./kc-docker/entrypoint.sh /
ENTRYPOINT /entrypoint.sh
CMD []
