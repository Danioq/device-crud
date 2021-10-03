package service

import (
	"backend/db"
	"github.com/google/uuid"
)

type Service interface {
	AddDevice(name string, description string, disabled bool) error
	EditDevice(id uuid.UUID, name string, description string, disabled bool) error
	DeleteDevice(id uuid.UUID) error
	GetDevices() error
}

type ServiceImpl struct {
	dbClient db.DB
}
