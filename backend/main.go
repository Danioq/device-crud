package main

import (
	"log"

	"backend/http"
)

func main() {
	server := http.NewServer()
	log.Fatalln(server.ListenAndServe())
}
