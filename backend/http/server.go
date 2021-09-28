package http

import (
	"net/http"
	"time"
)

func NewServer() *http.Server {
	router := newRouter()
	return &http.Server{
		Addr:         ":8080",
		Handler:      router,
		ReadTimeout:  10 * time.Second,
		WriteTimeout: 10 * time.Second,
	}
}
