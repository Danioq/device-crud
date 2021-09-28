package http

import "net/http"

func response(w http.ResponseWriter, data []byte, statusCode int) {
	w.WriteHeader(statusCode)
	w.Write(data)
}
