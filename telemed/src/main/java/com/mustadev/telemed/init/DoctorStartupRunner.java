package com.mustadev.telemed.init;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.mustadev.telemed.models.Clinic;
import com.mustadev.telemed.models.ClinicLocation;
import com.mustadev.telemed.models.Doctor;
import com.mustadev.telemed.models.ERole;
import com.mustadev.telemed.models.Role;
import com.mustadev.telemed.services.DoctorService;
import com.mustadev.telemed.services.ReviewService;
import com.mustadev.telemed.services.RoleService;

@Order(2)
@Component
public class DoctorStartupRunner implements CommandLineRunner {

	Logger logger = LoggerFactory.getLogger(DoctorStartupRunner.class);
	
	@Autowired
	private DoctorService doctorService;
	
	@Autowired
	private ReviewService reviewService;
	
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
		
	
		Clinic clinic = new Clinic();
		clinic.setName("Max Plank Clinic Name"); 
		clinic.setDescription("Max Plank Clinic Description");
		clinic.setCity("Agadir");
		clinic.setCountry("Morocco");
		clinic.setAddress("Morocco full address here");
		clinic.setLocation(new ClinicLocation(30.416068373487082f, -9.581001179762264f, 14));
		clinic.setServices(Arrays.asList("Service1", "Service2", "Service3"));
		clinic.setSpecialities(Arrays.asList("Speciality1", "Speciality2", "Speciality3", "Speciality4"));
		clinic.setConsultPrice(100);
		clinic.setMaxPrice(400);
		clinic.setMinPrice(150);
//		Review review1 = new Review();
//		Set<Review> reviews = new HashSet<>(Arrays.asList(
//				reviewService.save(new Review(
//						"content", 
//						"authorId3",
//						new HashSet<Like>(Arrays.asList( 
//								new Like("author2"))
//								), 1)).get(),
//				reviewService.save(new Review(
//						"content", 
//						"authorId2",
//						new HashSet<Like>(Arrays.asList(
//								new Like("author2"), 
//								new Like("author4"))
//								), 2)).get(),
//				reviewService.save(new Review(
//						"content", 
//						"authorId1",
//						new HashSet<Like>(
//								Arrays.asList(new Like("author5"),new Like("author7"), new Like("author3"))), 
//						3)).get()));
		Doctor doctor1 = new Doctor();
		doctor1.setFirstname("Max");
		doctor1.setLastname("Plank");
		doctor1.setUsername("maxplank");
		doctor1.setEmail("test@test.com");
		doctor1.setPassword(encoder.encode("password"));
		doctor1.setAboutMe("About Me ");
		doctor1.setClinic(clinic);
		doctor1.setRating(3f);
		doctor1.setAverageRating(1);
		doctor1.setSpeciality("Dentist");
//		doctor1.setReviews(reviews);
		Set<Role> roles = new HashSet<Role>();
		roles.add(roleService.findByName(ERole.ROLE_USER).
				orElseThrow(() -> new Exception("Role " + ERole.ROLE_USER + " not Found in DB")));
		doctor1.setRoles(roles);
		doctorService.save(doctor1);
		
		
		Clinic clinic2 = new Clinic();
		clinic2.setName("Bohr Clinic"); 
		clinic2.setDescription("Bohr  Clinic Description");
		clinic2.setCity("casa");
		clinic2.setCountry("morocco");
		clinic2.setAddress("Bohr Clinic full address here");
		clinic2.setLocation(new ClinicLocation(30.416068373487082f, -9.581001179762264f, 14));
		clinic2.setServices(Arrays.asList("Service1", "Service2", "Service3"));
		clinic2.setSpecialities(Arrays.asList("Speciality1", "Speciality2", "Speciality3", "Speciality4"));
		clinic2.setConsultPrice(200);
		clinic2.setMaxPrice(600);
		clinic2.setMinPrice(350);
		Doctor doctor2 = new Doctor();
		doctor2.setFirstname("Niels");
		doctor2.setLastname("Bohr");
		doctor2.setUsername("bohr");
		doctor2.setEmail("test1@test.com");
		doctor2.setPassword(encoder.encode("password"));
		doctor2.setAboutMe("About Bohr");
		doctor2.setClinic(clinic2);
		doctor2.setRating(1f);
		doctor2.setAverageRating(2);
		doctor2.setSpeciality("Dentist");
		Set<Role> roles2 = new HashSet<Role>();
		roles2.add(roleService.findByName(ERole.ROLE_USER).
				orElseThrow(() -> new Exception("Role " + ERole.ROLE_USER + " not Found in DB")));
		doctor2.setRoles(roles2);
		doctorService.save(doctor2);
		logger.info("doctors saved");

		logger.info("finished");
	}
}
