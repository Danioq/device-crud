package service

import (
	"backend/model"

	"github.com/google/uuid"
)

func (s *ServiceImpl) AddDevice(name string, description string, disabled bool) error {
	if err := checkName(name); err != nil {
		return err
	}

	device := model.Device{
		Id:          uuid.New().String(),
		Name:        name,
		Description: description,
		Disabled:    disabled,
	}
	return s.dbClient.AddDevice(device)
}
