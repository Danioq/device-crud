package service

import (
	"errors"
	"regexp"
	"strings"
)

var specialCharacters = []string{"!", "`", "!", "@", "#", "$", "%", "&", "*", "(", ")", "_", "+", "-", "=", "\\", "]", "[", "|", "{", "}", ".", ",", "<", ">", "/", "?", "~"}

func checkName(name string) error {
	pattern := strings.Join(specialCharacters, "")
	match, err := regexp.MatchString(pattern, name)
	if match || err != nil {
		return errors.New("can't contain special characters")
	}
	return nil
}