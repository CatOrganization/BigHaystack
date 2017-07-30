ORG=rickybarillas
ifndef
$(info No tag was set. Defaulting to 'latest')
$(info If you want to set a tag pass the arg TAG=... before the make command)
$(info Ex: TAG=1.0 make tag)
TAG=latest
endif

build:
	@docker build -t bighaysite:${TAG} .

run:
	@docker-compose -f compose.yml up -d server


tag:
	@docker tag bighaysite:${TAG} ${ORG}/bighaysite:${TAG}

push: tag
	@docker push ${ORG}/bighaysite:${TAG}

