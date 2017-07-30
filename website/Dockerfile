FROM rickybarillas/go_sass

COPY . /go/src/github.com/jbonzo/BigHaystack/website

WORKDIR /go/src/github.com/jbonzo/BigHaystack/website

CMD ./bin/sass.sh compile

WORKDIR /go/src/github.com/jbonzo/BigHaystack/website/server

RUN dep ensure

RUN GOOS=linux GOARCH=amd64 go install

EXPOSE 8080

ENTRYPOINT ["/go/bin/server"]
#ENTRYPOINT ["bash"]
