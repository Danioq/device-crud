package service

import (
	"backend/model"
	"github.com/google/uuid"
)

func (s *ServiceImpl) AddDevice(name string, description string, disabled bool) error {
	device := model.Device{
		Id:          uuid.New(),
		Name:        name,
		Description: description,
		Disabled:    disabled,
	}
	return s.dbClient.AddDevice(device)
}
