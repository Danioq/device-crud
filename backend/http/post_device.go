package http

import (
	"encoding/json"
	"io/ioutil"
	"net/http"

	"backend/service"
)

type PostDevice struct {
	Name        string `json:"name"`
	Description string `json:"description"`
	Disabled    bool   `json:"disabled"`
}

func postDeviceHandler(w http.ResponseWriter, r *http.Request) {
	body, err := ioutil.ReadAll(r.Body)
	defer r.Body.Close()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}

	var device PostDevice
	json.Unmarshal(body, &device)
	err = service.GetService().AddDevice(device.Name, device.Description, device.Disabled)
	
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.WriteHeader(http.StatusOK)
}
