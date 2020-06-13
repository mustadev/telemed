package com.mustadev.telemed.init;


import java.util.Arrays;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.format.annotation.DateTimeFormat.ISO;
import org.springframework.stereotype.Component;

import com.mustadev.telemed.models.Appointment;
import com.mustadev.telemed.repositories.AppointmentRepository;

/**
 * cette classe sert à créer une base composée des patients, à fin que lorsque on veut tester 
 * le code on aura un example pour le vérifier!!!
 * @author Ayoub BenHaimoud<ayoubbenhaimoud@gmail.com>
 * @since 20-03-2020
 *
 */
@Order(3)
@Component
public class AppointmentStartUpRunner implements CommandLineRunner {
	
    private static final Logger logger = LoggerFactory.getLogger(AppointmentStartUpRunner.class);
    
    @Autowired
    private AppointmentRepository appointmentRepository;

    
    public void run(String...args) throws Exception {
        logger.info("Application started with command-line arguments: {} . \n To kill this application, press Ctrl + C.", Arrays.toString(args));
	System.out.println(":::::::::::::::::::::::  From StartUp");
   	
	//supprimer les patientes
	logger.info("removing all databases records");
	appointmentRepository.deleteAll();
	
	
	//------------------------------------------------------------------------------
	Appointment appointment = new Appointment();
	appointment.setDoctorId("doctorId");
	appointment.setPatientId("patientId");
	appointment.setAppointmentDate(new Date());
	appointment.setBookingDate( null);
	appointment.setDescription("i feel sickness !");
	appointment.setState("PENGING");
	Appointment appointment1 = appointmentRepository.save(appointment);
	logger.debug("id: " +appointment1.getId());
    logger.debug("appointment "+appointment1.getId() + "saved");
    Appointment appointment2 = new Appointment();
    appointment2.setDoctorId("doctorId2");
    appointment2.setPatientId("patientId");
    appointment2.setAppointmentDate(new Date());
    appointment2.setBookingDate( null);
    appointment2.setDescription("i feel sickness !");
    appointment2.setState("PENDING");
	appointment2 = appointmentRepository.save(appointment2);
	logger.debug("id: " +appointment2.getId());
    logger.debug("appointment "+appointment2.getId() + "saved");
    
    //------------------------------------------------------------------------------
    
  
	System.out.println("appointments saved !");


	System.out.println("finished");
    }


}
