package com.mustadev.telemed.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.mustadev.telemed.models.Doctor;
import com.mustadev.telemed.repositories.DoctorRepository;

/**
 * implementation de {@link DoctorService DoctorService.class}
 * @author Mustapha De BrainStormers
 * @since version 0.0.1
 * 
 */
@Service
public class DoctorServiceImpl implements DoctorService {

  		
	@Autowired
	private DoctorRepository doctorRepository;
	
	@Override
	public Optional<List<Doctor>> findAll(Sort sort) {
		return Optional.of(doctorRepository.findAll(sort));
	}

	@Override
	public Optional<List<Doctor>> search(String query, String city, Sort sort) {
		return Optional.of(doctorRepository.search(query, city, sort));
	}

	@Override
	public Optional<Doctor> findById(String id) {
		return doctorRepository.findById(id);
	}

	@Override
	public Optional<Doctor> save(Doctor doctor) {
		return Optional.ofNullable(doctorRepository.save(doctor));
	}

	@Override
	public Optional<Doctor>  update(Doctor doctor) {
		return Optional.of(doctorRepository.save(doctor));
	}

	@Override
	public void deleteById(String id) {
		doctorRepository.deleteById(id);
	}

	@Override
	public Optional<List<Doctor>> searchByCity(String city, Sort sort) {
		List<Doctor> results = doctorRepository.searchByCity(city, sort);
		return Optional.of(results);
	}

	 @Override
	public void deleteByEmail(String email) {
		    doctorRepository.deleteByEmail(email);
	 }


	@Override
	public Optional<Doctor> findByEmail(String email) {
		return Optional.of(doctorRepository.findByEmail(email));
		
	}

	@Override
	public Optional<Doctor> findByUsername(String username) {
		
		return Optional.ofNullable(doctorRepository.findByUsername(username));
		
		
	}

	@Override
	public boolean existsByUsername(String username) {
	
		return doctorRepository.existsByUsername(username);
	}

	@Override
	public void deleteAll() {
		doctorRepository.deleteAll();
		
	}

	@Override
	public boolean existsByEmail(String email) {
		
		return doctorRepository.existsByEmail(email);
	}
	
}
