package http

import (
	"encoding/json"
	"net/http"

	"backend/service"
)

func getDevicesHandler(w http.ResponseWriter, r *http.Request) {
	devices, err := service.GetService().GetDevices()
	if err != nil {
		responseError(w, err)
		return
	}
	if len(devices) == 0 {
		response(w, nil, http.StatusNotFound)
		return
	}
	responseBody, err := json.Marshal(devices)
	if err != nil {
		responseError(w, err)
		return
	}
	response(w, responseBody, http.StatusOK)
}
