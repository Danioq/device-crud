package http

import (
	"encoding/json"
	"io/ioutil"
	"net/http"

	"github.com/Danioq/device-crud/backend/service"
)

type PatchDevice struct {
	Id          string `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
	Disabled    bool   `json:"disabled"`
}

func patchDeviceHandler(w http.ResponseWriter, r *http.Request) {
	body, err := ioutil.ReadAll(r.Body)
	defer r.Body.Close()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	var device PatchDevice
	json.Unmarshal(body, &device)
	err = service.GetService().EditDevice(device.Id, device.Name, device.Description, device.Disabled)

	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.WriteHeader(http.StatusOK)
}
