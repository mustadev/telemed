package com.mustadev.telemed.services;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mustadev.telemed.models.Patient;
import com.mustadev.telemed.repositories.AppointmentRepository;
import com.mustadev.telemed.repositories.PatientRepository;
import com.mustadev.telemed.models.Appointment;

import java.util.List;
import java.util.Optional;

/**
 * cette classe implemente {@link PatientService}
 * @author Ayoub BenHaimoud <ayoubbenhaimoud@gmail.com>
 * @since 17-3-2020
 */
@Service
public class AppointmentServiceImpl implements AppointmentService {
    @Autowired
    private AppointmentRepository appointmentRepository;
    @Override
    public Optional<List<Appointment>> findAll() {
        return Optional.of(appointmentRepository.findAll());
    }

    @Override
    public Optional<Appointment> findAppointmentById(String id) {
        return appointmentRepository.findById(id);
    }

    @Override
    public Optional<Appointment> insertAppointment(Appointment appointment) {
        return Optional.of(appointmentRepository.save(appointment));
    }

    @Override
    public Optional<Appointment> updateAppointment( Appointment appointment) {
        return Optional.of(appointmentRepository.save(appointment));
    }

    @Override
    public void deleteAppointmentById(String id) {
    	appointmentRepository.deleteById(id);
    }

	@Override
	public Optional<List<Appointment>> findAppotByDoctorId(String doctorId) {
		return Optional.of(appointmentRepository.findByDoctorId(doctorId));
	}
	
	@Override
	public Optional<List<Appointment>> findAppotByPatientId(String patientId) {
		return Optional.of(appointmentRepository.findByPatientId(patientId));
	}
}