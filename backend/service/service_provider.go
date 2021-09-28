package service

import (
	"sync"

	"github.com/Danioq/device-crud/backend/db"
)

var (
	serviceImpl     *ServiceImpl
	serviceImplSync sync.Once
)

func GetService() *ServiceImpl {
	serviceImplSync.Do(func() {
		serviceImpl = &ServiceImpl{dbClient: db.NewDBClient()}
	})

	return serviceImpl
}
