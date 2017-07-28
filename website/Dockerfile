FROM bighaystack/go_sass:latest

COPY . /go/src/github.com/jbonzo/BigHaystack/website

WORKDIR /go/src/github.com/jbonzo/BigHaystack/website

CMD ["./bin/sass.sh", "compile"]

WORKDIR /go/src/github.com/jbonzo/BigHaystack/website/server

RUN GOOS=linux GOARCH=amd64 go install

RUN dep ensure

EXPOSE 8080

ENTRYPOINT ["/go/bin/server"]