package db

import (
	"backend/model"
	"encoding/json"
	"errors"

	"github.com/go-redis/redis"
	"github.com/google/uuid"
)

type DB interface {
	GetDevices() ([]model.Device, error)
	AddDevice(device model.Device) error
	EditDevice(device model.Device) error
	DeleteDevice(id uuid.UUID) error
}

type DBImpl struct {
	Client *redis.Client
}

func (impl *DBImpl) GetDevices() ([]model.Device, error) {
	val, err := impl.Client.Get("*").Result()
	if err != nil {
		return nil, err
	}
	var devices []model.Device
	err = json.Unmarshal([]byte(val), &devices)
	if err != nil {
		return nil, err
	}
	return devices, nil
}

func (impl *DBImpl) AddDevice(device model.Device) error {
	_, err := impl.Client.Get(device.Id.String()).Result()
	if err == nil {
		return errors.New("device already exists")
	}
	return impl.Client.Set(device.Id.String(), device, 0).Err()

}


func (impl *DBImpl) EditDevice(device model.Device) error {
	_, err := impl.Client.Get(device.Id.String()).Result()
	if err != nil {
		return err
	}
	return impl.AddDevice(device)
}


func (impl *DBImpl) DeleteDevice(id uuid.UUID) error {
	return impl.Client.Del(id.String()).Err()
}