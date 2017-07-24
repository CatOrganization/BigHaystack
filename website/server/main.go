package main

import (
	"net/http"
	"github.com/inconshreveable/log15"
)

var (
	log = log15.New("server", "/")
)

const (
	staticDir = "../static"
)

func main() {
	log.Info("hello")
	http.Handle("/", http.FileServer(http.Dir(staticDir)))
	http.ListenAndServe(":8080", nil)
}
