FROM node:16.16.0 as node
FROM amacneil/dbmate:1.12.1 as dbmate
FROM hasura/graphql-engine:v2.8.4.cli-migrations-v3

WORKDIR /

RUN \
  apt-get -q update && \
  apt-get install -y --no-install-recommends --auto-remove nginx && \
  apt-get -q clean

# add nginx config
COPY ./svc-docker/nginx.conf /etc/nginx/nginx.conf
COPY ./svc-web/dist/ /usr/share/nginx/web/
COPY ./svc-admin/dist/ /usr/share/nginx/admin/
RUN chmod o+rw -R /var/log/nginx/ /etc/nginx/ /usr/share/nginx/ /var/lib/nginx/ /run/

# add hasusra config
COPY ./svc-hasura/metadata /hasura-metadata

# add node
COPY --from=node /usr/local /usr/local
COPY ./svc-server/dist/ncc/ /server

# add dbmate + migrations
COPY --from=dbmate /usr/local/bin/dbmate /usr/local/bin/dbmate
COPY ./svc-server/db/migrations /migrations

# Run the image as a non-root user
RUN adduser --disabled-login appuser
USER appuser

COPY ./svc-docker/entrypoint.sh /
ENTRYPOINT /entrypoint.sh
CMD []
