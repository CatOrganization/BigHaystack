FROM golang

COPY . /go/src/github.com/jbonzo/BigHaystack/
WORKDIR /go/src/github.com/jbonzo/BigHaystack/server


RUN GOOS=linux GOARCH=amd64 go install

ENTRYPOINT ["/go/bin/server"]