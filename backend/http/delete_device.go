package http

import (
	"net/http"

	"backend/service"

	"github.com/gorilla/mux"
)

func deleteDeviceHandler(w http.ResponseWriter, r *http.Request) {
	id := mux.Vars(r)["id"]
	err := service.GetService().DeleteDevice(id)
	if err != nil {
		responseError(w, err)
		return
	}
	response(w, nil, http.StatusOK)
}
