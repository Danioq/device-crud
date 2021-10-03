package http

import (
	"net/http"

	"backend/service"
)

func deleteDeviceHandler(w http.ResponseWriter, r *http.Request) {
	id := r.URL.Query().Get("id")
	err := service.GetService().DeleteDevice(id)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
	w.WriteHeader(http.StatusOK)
}
