package com.telemed.airdoc.controllers;


import org.junit.jupiter.api.BeforeAll;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.telemed.rest.models.Doctor;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;

import static io.restassured.RestAssured.*;
import static io.restassured.module.jsv.JsonSchemaValidator.*;
import static org.hamcrest.Matchers.*;
//import static org.junit.jupiter.api.Assertions.fail;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class DoctorControllerIntergationTest {
	


	@LocalServerPort
	private int port;
	
	@Autowired
	private PasswordEncoder encoder;


	@BeforeAll
	static void setUpBeforeClass() throws Exception {
	}

	@BeforeEach
	void setUp() throws Exception {
		RestAssured.baseURI = "http://localhost";
		RestAssured.port = port;
		RestAssured.basePath = "/doctors";
	}


	@Test
	//@Disabled
	void test_create_doctor() {


		Doctor doctor = new Doctor();
		doctor.setFirstname("DR");
		doctor.setLastname("Who");
		doctor.setUsername("drwho");
		doctor.setEmail("who@test.com");
		doctor.setPassword(encoder.encode("password"));
		given().
		contentType(ContentType.JSON).
		accept(ContentType.JSON).
		body(doctor).
		when().
		post().
		then().
		assertThat().
		statusCode(HttpStatus.UNAUTHORIZED.value());
		
	}

	@Test
	void test_delete_response_and_status_code(){
		given().
		contentType(ContentType.JSON).
		accept(ContentType.JSON).
		when().
		delete("/123").
		then().
		assertThat().
		statusCode(HttpStatus.OK.value()).
		body("message", containsString("doctor with ID : 123 successfully deleted"));

	}

	@Test
	void test_get_all(){
		//TODO 
		//fail("not yet implemented");
		get().
		then().
		assertThat().
		contentType(ContentType.JSON).
		statusCode(HttpStatus.OK.value());
	}
	
	@Test
	void test_get_by_id(){
		get("/doctor_id_does_not_exist").
			then().
			assertThat().
			statusCode(HttpStatus.NOT_FOUND.value()).
			contentType(ContentType.JSON).
			body("message", equalTo("No Doctor with id : doctor_id_does_not_exist"));
	}




	@Test
	void test_search_by_params(){
		given().
			contentType(ContentType.JSON).
			accept(ContentType.JSON).
			param("query", "tes").
			param("city", "fes").
			param("sort", "rating").
		when().
			get().
		then().
			log().
			body().
			statusCode(HttpStatus.OK.value());
	}
}
