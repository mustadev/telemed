package com.telemed.rest.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.telemed.rest.models.ERole;
import com.telemed.rest.models.Role;
import com.telemed.rest.repositories.RoleRepository;

@Service
public class RoleServiceImpl implements RoleService {

	@Autowired
	RoleRepository roleRepository;
	
	@Override
	public Optional<Role> findByName(ERole name) {
		return Optional.of(roleRepository.findByName(name));
	}

	@Override
	public void deleteByName(ERole name) {
		roleRepository.deleteByName(name);
		
	}

	@Override
	public void deleteAll() {
		roleRepository.deleteAll();
		
	}

	@Override
	public Optional<Role> save(ERole name) {
		Role role = new Role(name);
		return Optional.of(roleRepository.save(role));
	}

}