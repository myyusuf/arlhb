package com.nusapro.arlhb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.nusapro.arlhb.controller.MainController;

@SpringBootApplication
public class ArlhbApplication {

	public static void main(String[] args) {
		SpringApplication.run(MainController.class, args);
	}
}
