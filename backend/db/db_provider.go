package db

import (
	"os"
	"sync"

	"github.com/go-redis/redis"
)

var Client *DBImpl
var ClientOnce sync.Once

func GetDBClient() *DBImpl {
	ClientOnce.Do(func() {
		Client = &DBImpl{
			Client: redis.NewClient(&redis.Options{
				Addr: os.Getenv("REDIS_URL"),
				Password: "",
				DB: 0,				
			}),
		}
	})
	return Client
}
