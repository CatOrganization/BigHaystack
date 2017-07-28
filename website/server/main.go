package main

import (
	"net/http"
	"github.com/inconshreveable/log15"
)

const (
	staticDir = "../static"
	port = "8080"
)

func main() {
	log15.Info("Running server", "port", port)
	http.Handle("/", http.FileServer(http.Dir(staticDir)))
	http.ListenAndServe(":" + port, nil)
}
