package com.telemed.rest.init;

import java.util.Arrays;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.telemed.rest.services.AdminService;
import com.telemed.rest.services.RoleService;

@Order(4)
@Component
public class AdminStartupRunner implements CommandLineRunner {

	Logger logger = LoggerFactory.getLogger(AdminStartupRunner.class);
	
	@Autowired
	private AdminService adminService;
	
	@Autowired
	private RoleService roleService;
	
	@Autowired
	PasswordEncoder encoder;
	
	@Override
	public void run(String... args) throws Exception {
		logger.info(
				"Application started with command-line arguments: {} . \n To kill this application, press Ctrl + C.",
				Arrays.toString(args));
		System.out.println(":::::::::::::::::::::::  From StartUp");
		
		
	

		logger.info("finished");
	}
}