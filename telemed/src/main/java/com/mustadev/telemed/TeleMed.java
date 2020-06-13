package com.mustadev.telemed;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


/**
 * TeleMed application
 * le Airbnb de doctors
 * @author Mustapha De BrainStormers
 * @since version 0.0.1
 * 
 */
@SpringBootApplication
public class TeleMed {

    public static void main(String[] args) {
        SpringApplication.run(TeleMed.class, args);
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
