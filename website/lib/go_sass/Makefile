build:
	docker build -t go_sass:latest .

run: build
	docker run go_sass

tag:
	docker tag go_sass:latest rickybarillas/go_sass:latest

push: tag
	docker push rickybarillas/go_sass:latest

