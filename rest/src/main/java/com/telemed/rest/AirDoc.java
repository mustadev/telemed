package com.telemed.rest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;


/**
 * AirDoc application
 * le Airbnb de doctors
 * @author Mustapha De BrainStormers
 * @since version 0.0.1
 * 
 */
@SpringBootApplication
@EnableEurekaClient
public class AirDoc {

    public static void main(String[] args) {
        SpringApplication.run(AirDoc.class, args);
    }
    
//    public WebMvcConfigurer corsConfigurer() {
//		return new WebMvcConfigurer() {
//			@Override
//			public void addCorsMappings(CorsRegistry registry) {
//				registry.addMapping("/doctors").allowedOrigins("http://localhost:4200");
//			}
//		};
//	}
}
