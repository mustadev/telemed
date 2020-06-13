package com.mustadev.telemed.init;


import java.util.Arrays;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.mustadev.telemed.models.Patient;
import com.mustadev.telemed.repositories.PatientRepository;

/**
 * cette classe sert à créer une base composée des patients, à fin que lorsque on veut tester 
 * le code on aura un example pour le vérifier!!!
 * @author Ayoub BenHaimoud<ayoubbenhaimoud@gmail.com>
 * @since 20-03-2020
 *
 */
@Order(3)
@Component
public class PatientStartUpRunner implements CommandLineRunner {
	
    private static final Logger logger = LoggerFactory.getLogger(PatientStartUpRunner.class);
    
    @Autowired
    private PatientRepository patientRepository;
    
    @Autowired
    private PasswordEncoder encoder;

    
    @Override
	public void run(String...args) throws Exception {
        logger.info("Application started with command-line arguments: {} . \n To kill this application, press Ctrl + C.", Arrays.toString(args));
	System.out.println(":::::::::::::::::::::::  From StartUp");
   
	
	
	//------------------------------------------------------------------------------
	Patient patient1 = new Patient();
	patient1.setFirstname("Ayoub");
	patient1.setLastname("ben");
	patient1.setUsername("ben");
	patient1.setEmail("ayoub@gmail.com");
	patient1.setPassword(encoder.encode("password"));
	Patient savedPatient1 = patientRepository.save(patient1);
	logger.debug("id: " +savedPatient1.getId() + " name: " + savedPatient1.getFirstname()+""+savedPatient1.getLastname());
    logger.debug("patient "+savedPatient1.getId() + "saved");
    
    //------------------------------------------------------------------------------
    
    Patient patient2 = new Patient();
    patient2.setFirstname("mehdi");
    patient2.setLastname("ozi");
    patient2.setUsername("ozi");
    patient2.setEmail("mehdi@gmail.com");
    patient2.setPassword(encoder.encode("password"));
    Patient savedPatient2 = patientRepository.save(patient2);
	logger.debug("id: " +savedPatient2.getId() + " name: " + savedPatient2.getFirstname()+""+savedPatient2.getLastname());
    logger.debug("patient "+savedPatient2.getId() + "saved");
    
   //------------------------------------------------------------------------------
    Patient patient3 = new Patient();
    patient3.setFirstname("jean");
    patient3.setLastname("freroa");
    patient3.setUsername("freroa");
    patient3.setEmail("jean@gmail.com");
    patient3.setPassword(encoder.encode("password"));
    Patient savedPatient3 = patientRepository.save(patient3);
	logger.debug("id: " +savedPatient3.getId() + " name: " + savedPatient3.getFirstname()+""+savedPatient3.getLastname());
    logger.debug("patient "+savedPatient3.getId() + "saved");
  //------------------------------------------------------------------------------
    Patient patient4 = new Patient();
    patient4.setFirstname("fatima");
    patient4.setLastname("koam");
    patient4.setUsername("koam");
    patient4.setEmail("fatima@gmail.com");
    patient4.setPassword(encoder.encode("password"));
	Patient savedPatient4 = patientRepository.save(patient4);
	logger.debug("id: " +savedPatient4.getId() + " name: " + savedPatient4.getFirstname()+""+savedPatient4.getLastname());
    logger.debug("patient "+savedPatient4.getId() + "saved");
    
	System.out.println("patients saved !");


	System.out.println("finished");
    }

}
