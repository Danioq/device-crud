package service

import (
	"github.com/Danioq/device-crud/backend/model"
	"github.com/google/uuid"
)

func (s *ServiceImpl) EditDevice(id string, name string, description string, disabled bool) error {
	uuidFromString, err := uuid.FromBytes([]byte(id))
	if err != nil {
		return err
	}
	device := model.Device{
		Id:          uuidFromString,
		Name:        name,
		Description: description,
		Disabled:    disabled,
	}
	return s.dbClient.EditDevice(device)
}
