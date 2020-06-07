package com.telemed.webchat;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
// import org.springframework.cloud.client.circuitbreaker.EnableCircuitBreaker;
// import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
// @EnableEurekaClient 		// Enable eureka client.
// @EnableCircuitBreaker 	// Enable circuit breakers
public class WebChatApp {

	public static void main(String[] args) {
		SpringApplication.run(WebChatApp.class, args);
	}
}

// @Configuration
// class RestTemplateConfig {
	
// 	// Create a bean for restTemplate to call services
// 	@Bean
// 	@LoadBalanced		// Load balance between service instances running at different ports.
// 	public RestTemplate restTemplate() {
// 	    return new RestTemplate();
// 	}
// }