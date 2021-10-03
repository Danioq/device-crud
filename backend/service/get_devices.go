package service

import (
	"backend/model"
)

func (s ServiceImpl) GetDevices() ([]model.Device, error) {
	return s.dbClient.GetDevices()
}
