package service

import (
	"github.com/google/uuid"
)

func (s *ServiceImpl) DeleteDevice(id string) error {
	uuidFromString, err := uuid.FromBytes([]byte(id))
	if err != nil {
		return err
	}
	return s.dbClient.DeleteDevice(uuidFromString)
}
