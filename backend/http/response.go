package http

import "net/http"

func response(w http.ResponseWriter, data []byte, statusCode int) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	w.WriteHeader(statusCode)
	w.Write(data)
}

func responseError(w http.ResponseWriter, err error) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
	http.Error(w, err.Error(), http.StatusInternalServerError)
}
