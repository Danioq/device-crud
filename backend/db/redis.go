package db

import (
	"backend/model"
	"encoding/json"
	"errors"

	"github.com/go-redis/redis"
)

type DB interface {
	GetDevices() ([]model.Device, error)
	AddDevice(device model.Device) error
	EditDevice(device model.Device) error
	DeleteDevice(id string) error
}

type DBImpl struct {
	Client *redis.Client
}

func (impl *DBImpl) GetDevices() ([]model.Device, error) {
	keys, err := impl.Client.Keys("*").Result()
	if err != nil {
		return nil, err
	}
	var devices []model.Device
	for _, key := range keys {
		var device model.Device
		dev, err := impl.Client.Get(key).Result()
		if err != nil {
			return nil, err
		}
		err = json.Unmarshal([]byte(dev), &device)
		if err != nil {
			return nil, err
		}
		devices = append(devices, device)
	}

	return devices, nil
}

func (impl *DBImpl) AddDevice(device model.Device) error {
	_, err := impl.Client.Get(device.Id).Result()
	if err == nil {
		return errors.New("device already exists")
	}
	marshaledDevice, err := json.Marshal(device)
	if err != nil {
		return err
	}
	return impl.Client.Set(device.Id, marshaledDevice, 0).Err()

}


func (impl *DBImpl) EditDevice(device model.Device) error {
	err := impl.DeleteDevice(device.Id)
	if err != nil {
		return err
	}
	return impl.AddDevice(device)
}


func (impl *DBImpl) DeleteDevice(id string) error {
	return impl.Client.Del(id).Err()
}