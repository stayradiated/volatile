.PHONY: build

build:
	pnpm --dir=../ -r --workspace-concurrency=1 run build
	pnpm --dir=../ -r --workspace-concurrency=1 run build:ncc
	docker build -t stayradiated/volatile:latest --file Dockerfile ..
