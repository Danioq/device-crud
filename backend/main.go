package main

import (
	"log"

	"github.com/Danioq/device-crud/backend/http"
)

func main() {
	server := http.NewServer()
	log.Fatalln(server.ListenAndServe())
}
