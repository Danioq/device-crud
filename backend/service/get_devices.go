package service

import (
	"github.com/Danioq/device-crud/backend/model"
)

func (s ServiceImpl) GetDevices() ([]model.Device, error) {
	return s.dbClient.GetDevices()
}
