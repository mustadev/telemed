package com.telemed.rest.services;


import org.springframework.stereotype.Service;

import com.telemed.rest.models.Appointment;

import java.util.List;
import java.util.Optional;

/** 
 * cet interface pour déclarer toutes les méthodes de  la classe PatientServiceImpl
 * @author Ayoub BenHaimoud<ayoubbenhaimoud@gmail.com>
 * @since 17-03-2020
 */

@Service
public interface AppointmentService {
    /**
     * cette méthode pour récupérer tous les rendez-vous 
     * @return List<Appointment>
     */
    Optional<List<Appointment>> findAll();

    /**
     * cette méthode sert à trouver un rendez-vous en utilissant l'id
     * @param id
     * @return
     */
    Optional<Appointment> findAppointmentById(String id);
    
    Optional<List<Appointment>>findAppotByDoctorId(String id);
    
    Optional<List<Appointment>> findAppotByPatientId(String id);

    /**
     * cette méthode sert à créer un nouvau rendez-vous
     * @param appointment
     * @return
     */
    Optional<Appointment> insertAppointment(Appointment appointment);

    /**
     * cette méthode sert à modifier un rendez-vous
     * @param appointment
     * @return
     */
    Optional<Appointment> updateAppointment(Appointment appointment);
    /**
     * cette méthode sert à supprimer un rendez-vous
     * @param id
     * @return
     */
    void deleteAppointmentById(String id);

}
