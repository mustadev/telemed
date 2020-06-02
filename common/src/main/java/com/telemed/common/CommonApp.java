package com.telemed.common;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;


@SpringBootApplication
@EnableEurekaClient
public class CommonApp {

	public static void main(String[] args) {
		SpringApplication.run(CommonApp.class, args);
	}
}
