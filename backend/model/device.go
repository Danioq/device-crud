package model

import "github.com/google/uuid"

type Device struct {
	Id          uuid.UUID `json:"id"`
	Name        string    `json:"name"`
	Description string    `json:"description"`
	Disabled    bool      `json:"disabled"`
}
