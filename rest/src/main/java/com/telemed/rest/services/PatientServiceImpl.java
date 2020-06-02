package com.telemed.rest.services;





import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.telemed.rest.models.Patient;
import com.telemed.rest.repositories.PatientRepository;

/**
 * cette classe implemente {@link PatientService}
 * @author Ayoub BenHaimoud <ayoubbenhaimoud@gmail.com>
 * @since 17-3-2020
 */
@Service
public class PatientServiceImpl implements PatientService {
    @Autowired
    private PatientRepository patientRepository;
    @Override
    public Optional<List<Patient>> findAll() {
        return Optional.of(patientRepository.findAll());
    }

    @Override
    public Optional<Patient> findPatientById(String id) {
        return patientRepository.findById(id);
    }

    @Override
    public Optional<Patient> insertPatient(Patient patient) {
        return Optional.of(patientRepository.insert(patient));
    }

    @Override
    public Optional<Patient> updatePatient( Patient patient) {
        return Optional.of(patientRepository.save(patient));
    }

    @Override
    public void deletePatientById(String id) {
    	patientRepository.deleteById(id);
    }
    
    public void deleteByEmail(String email) {
    	patientRepository.deleteByEmail(email);
 }

	
	@Override
	public Optional<Patient> findByEmail(String email) {
		return Optional.ofNullable(patientRepository.findByEmail(email));
		
	}
	
	@Override
	public Optional<Patient> findByUsername(String username) {
		return Optional.ofNullable(patientRepository.findByUsername(username));
	}
	
	@Override
	public boolean existsByUsername(String username) {
	
		return patientRepository.existsByUsername(username);
	}
	
	@Override
	public void deleteAll() {
		patientRepository.deleteAll();
		
	}
	
	@Override
	public boolean existsByEmail(String email) {
		
		return patientRepository.existsByEmail(email);
	}

	@Override
	public Optional<Patient> save(Patient patient) {
		
		return Optional.ofNullable(patientRepository.save(patient));
	}
	
}
