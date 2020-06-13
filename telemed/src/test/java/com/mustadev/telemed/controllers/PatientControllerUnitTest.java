package com.mustadev.telemed.controllers;


import static org.mockito.Mockito.when;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


import com.mustadev.telemed.models.Patient;
import com.mustadev.telemed.services.PatientService;

import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;


/**
 * 
 *@author Ayoub Benhaimoud<ayoubbenhaimoud@gmail.com>
 *@since 20-3-2020
 *
 */
@WebMvcTest(PatientController.class) 
public class PatientControllerUnitTest{

	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private PatientService service;

//	@Test
//	@Disabled
//	public void verifier_status_code() throws Exception {
//	
//	
////		List<Patient> patients = new ArrayList<>();
////		patients.add(new Patient());
////		when(service.findAll()).thenReturn(Optional.of(patients));
////		this.mockMvc.perform(get("/users")).andDo(print()).andExpect(status().isOk());
////				//.andExpect(content().string(containsString("")));
//		
//	}
}
