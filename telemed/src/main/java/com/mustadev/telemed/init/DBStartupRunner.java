package com.mustadev.telemed.init;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import com.mustadev.telemed.services.AdminService;
import com.mustadev.telemed.services.AppointmentService;
import com.mustadev.telemed.services.DoctorService;
import com.mustadev.telemed.services.PatientService;
import com.mustadev.telemed.services.PhotoService;
import com.mustadev.telemed.services.ReviewService;
import com.mustadev.telemed.services.RoleService;

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
	private AppointmentService appointmentService;
	
	@Autowired
	private RoleService roleService;
	
	@Override
	public void run(String... args) throws Exception {
		logger.debug("deleting all databse");
		roleService.deleteAll();
		photoService.deleteAll();
		reviewService.deleteAll();
		appointmentService.deleteAll();
		adminService.deleteAll();
		doctorService.deleteAll();
		patientService.deleteAll();
		
	}

}
