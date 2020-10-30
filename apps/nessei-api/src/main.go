package main

import (
	"fmt"
	"net/http"

	"github.com/labstack/echo/v4"
)

func Hello(name string) string {
	result := "Hello " + name
	return result
}

func main() {
	fmt.Println(Hello("nessei-api"))
	e := echo.New()
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, World!")
	})
	e.Logger.Fatal(e.Start(":1323"))
}
