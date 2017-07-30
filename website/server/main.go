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
	port = "80"
)

func main() {
	log.Info("Running server", "port", port)
	http.Handle("/", http.FileServer(http.Dir(staticDir)))
	http.ListenAndServe(":" + port, nil)
}
