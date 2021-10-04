package service

func (s *ServiceImpl) DeleteDevice(id string) error {
	return s.dbClient.DeleteDevice(id)
}
