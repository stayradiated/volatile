FROM hasura/graphql-engine:v2.0.1.cli-migrations-v2

COPY ./metadata /hasura-metadata
WORKDIR /

# Run the image as a non-root user
RUN adduser -D appuser
USER appuser

CMD graphql-engine serve --server-port "${PORT}"
