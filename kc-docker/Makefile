build:
	rm context.tar

	tar cf context.tar \
		Dockerfile \
		entrypoint.sh \
		../kc-hasura/metadata \
		../kc-server/dist/ncc \
		../kc-server/db/migrations

	cat context.tar | \
		docker build --tag stayradiated/kc -
