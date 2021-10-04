package service

import (
	"backend/model"
)

func (s *ServiceImpl) EditDevice(id string, name string, description string, disabled bool) error {
	device := model.Device{
		Id:          id,
		Name:        name,
		Description: description,
		Disabled:    disabled,
	}
	return s.dbClient.EditDevice(device)
}
