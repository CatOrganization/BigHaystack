ifndef
TAG=latest
endif

build:
	docker build -t bighaysite:${TAG} .

run:
	docker-compose -f compose.yml up -d server


tag:
	docker tag bighaysite:${TAG} rickybarillas/bighaysite:${TAG}

push: tag
	docker push rickybarillas/bighaysite:${TAG}

