package http

import (
	"encoding/json"
	"net/http"

	"github.com/Danioq/device-crud/backend/service"
)

func getDevicesHandler(w http.ResponseWriter, r *http.Request) {
	devices, err := service.GetService().GetDevices()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
	}
	if len(devices) == 0 {
		http.NotFound(w, r)
	}
	responseBody, err := json.Marshal(devices)
	response(w, responseBody, http.StatusOK)
}
