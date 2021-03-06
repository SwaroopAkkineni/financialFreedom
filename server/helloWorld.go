package main

import (
	"bytes"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
)

// Server to serve up templates and such
type myHandler struct {
	mux map[string]func(http.ResponseWriter, *http.Request)
}

func (mh *myHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	if h, ok := mh.mux[r.URL.String()]; ok {
		h(w, r)
		return
	}

	http.NotFound(w, r)
}

var mux map[string]func(http.ResponseWriter, *http.Request)

func helloWorld(w http.ResponseWriter, r *http.Request) {
	io.WriteString(w, "Hello world!")
}

func setDataFromClient(w http.ResponseWriter, r *http.Request) {
	buff := new(bytes.Buffer)

	buff.ReadFrom(r.Body)
	body := buff.String()

	io.WriteString(w, body)
	w.WriteHeader(http.StatusOK)
}

func (mh *myHandler) addRouteToMux(route string, handlerFunc func(http.ResponseWriter, *http.Request)) {
	mh.mux[route] = handlerFunc
}

func main() {
	mh := &myHandler{mux: make(map[string]func(http.ResponseWriter, *http.Request))}

	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}

	server := http.Server{
		Addr:    ":"+port,
		Handler: mh,
	}

	mh.addRouteToMux("/hello", helloWorld)
	mh.addRouteToMux("/setDataFromClient", setDataFromClient)

	log.Fatal(server.ListenAndServe())
}
