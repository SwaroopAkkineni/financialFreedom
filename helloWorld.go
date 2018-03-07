package main

import (
	"net/http"
	"fmt"
)

const (
	port = ":3000"
)

func helloWorld(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello World")
}

func main() {
	http.HandleFunc("/", helloWorld)
	http.ListenAndServe(port, nil)
}