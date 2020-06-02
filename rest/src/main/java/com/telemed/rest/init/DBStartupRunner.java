package com.telemed.rest.init;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import com.telemed.rest.services.AdminService;
import com.telemed.rest.services.DoctorService;
import com.telemed.rest.services.PatientService;
import com.telemed.rest.services.PhotoService;
import com.telemed.rest.services.ReviewService;
import com.telemed.rest.services.RoleService;

@Order(1)
@Component
public class DBStartupRunner implements CommandLineRunner {

	Logger logger = LoggerFactory.getLogger(DBStartupRunner.class);

	@Autowired
	private DoctorService doctorService;
	
	@Autowired
	private PatientService patientService;
	
	@Autowired
	private AdminService adminService;
	
	
	@Autowired
	private ReviewService reviewService;
	
	@Autowired
	private PhotoService photoService;
	
	@Autowired
	private RoleService roleService;
	
	@Override
	public void run(String... args) throws Exception {
		logger.debug("deleting all databse");
		roleService.deleteAll();
		photoService.deleteAll();
		reviewService.deleteAll();
		adminService.deleteAll();
		doctorService.deleteAll();
		patientService.deleteAll();
		
	}

}
