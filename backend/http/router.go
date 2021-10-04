package http

import (
	"net/http"

	"github.com/gorilla/mux"
)

func newRouter() *mux.Router {
	r := mux.NewRouter()

	applyRoutes(r)
	return r
}

func applyRoutes(r *mux.Router) {
	r.Path("/devices").Methods(http.MethodGet).HandlerFunc(getDevicesHandler)
	r.Path("/device").Methods(http.MethodPost).HandlerFunc(postDeviceHandler)
	r.Path("/device").Methods(http.MethodPatch).HandlerFunc(patchDeviceHandler)
	r.Path("/device/{id}").Methods(http.MethodDelete).HandlerFunc(deleteDeviceHandler)
	r.Path("/devices").Methods(http.MethodOptions).HandlerFunc(optionsHandler)
	r.Path("/device").Methods(http.MethodOptions).HandlerFunc(optionsHandler)
	r.Path("/device/{id}").Methods(http.MethodOptions).HandlerFunc(optionsHandler)
}
