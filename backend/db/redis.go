package db

import (
	"github.com/Danioq/device-crud/backend/model"
	"github.com/google/uuid"
)

type DB interface {
	GetDevices() ([]model.Device, error)
	AddDevice(device model.Device) error
	EditDevice(device model.Device) error
	DeleteDevice(id uuid.UUID) error
}
