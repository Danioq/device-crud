package http

import (
	"encoding/json"
	"io/ioutil"
	"log"
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
		log.Default().Println(r.Body)
	defer r.Body.Close()
	if err != nil {
		responseError(w, err)
		return
	}

	var device PostDevice
	err = json.Unmarshal(body, &device) 
	if err != nil {
		responseError(w, err)
		return
	}
	err = service.GetService().AddDevice(device.Name, device.Description, device.Disabled)
	
	if err != nil {
		responseError(w, err)
		return
	}
	response(w, nil, http.StatusOK)
}
