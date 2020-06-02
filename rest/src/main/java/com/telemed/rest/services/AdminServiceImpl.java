package com.telemed.rest.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.telemed.rest.models.Admin;
import com.telemed.rest.repositories.AdminRepository;

/**
 * implementation de {@link AdminService AdminService.class}
 * @author Mustapha Ouarrain
 * @since version 0.0.1
 * 
 */
@Service
public class AdminServiceImpl implements AdminService {

  		
	@Autowired
	private AdminRepository adminRepository;
	
	@Override
	public Optional<List<Admin>> findAll() {
		return Optional.of(adminRepository.findAll());
	}


	@Override
	public Optional<Admin> findById(String id) {
		return adminRepository.findById(id);
	}

	@Override
	public Optional<Admin> save(Admin admin) {
		return Optional.of(adminRepository.save(admin));
	}

	@Override
	public Optional<Admin>  update(Admin admin) {
		return Optional.of(adminRepository.save(admin));
	}

	@Override
	public void deleteById(String id) {
		adminRepository.deleteById(id);
	}


	 @Override
	public void deleteByEmail(String email) {
		    adminRepository.deleteByEmail(email);
	 }


	@Override
	public Optional<Admin> findByEmail(String email) {
		return Optional.of(adminRepository.findByEmail(email));
		
	}

	@Override
	public Optional<Admin> findByUsername(String username) {
		
		return Optional.ofNullable(adminRepository.findByUsername(username));
				
	}

	@Override
	public boolean existsByUsername(String username) {
		return adminRepository.existsByUsername(username);
	}

	@Override
	public void deleteAll() {
		adminRepository.deleteAll();
	}

	@Override
	public boolean existsByEmail(String email) {
		return adminRepository.existsByEmail(email);
	}
}