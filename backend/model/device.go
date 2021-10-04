package model

type Device struct {
	Id          string 	  `json:"id"`
	Name        string    `json:"name"`
	Description string    `json:"description"`
	Disabled    bool      `json:"disabled"`
}
