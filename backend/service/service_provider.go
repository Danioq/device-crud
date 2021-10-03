package service

import (
	"sync"

	"backend/db"
)

var (
	serviceImpl     *ServiceImpl
	serviceImplSync sync.Once
)

func GetService() *ServiceImpl {
	serviceImplSync.Do(func() {
		serviceImpl = &ServiceImpl{dbClient: db.GetDBClient()}
	})

	return serviceImpl
}
