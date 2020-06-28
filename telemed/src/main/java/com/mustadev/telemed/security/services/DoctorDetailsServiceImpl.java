package com.mustadev.telemed.security.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mustadev.telemed.services.DoctorService;


/**
 * @author Mustapha mustadev
 * @since version 1.0.0
 * 
 */
@Service
public class DoctorDetailsServiceImpl implements UserDetailsService {
	
	
	@Autowired
	DoctorService doctorService;


	@Override
	@Transactional
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        return  UserDetailsImpl.build(doctorService.findByEmail(username)
				.orElseThrow(() -> new UsernameNotFoundException("Doctor Not Found with Email: " + username)));
	}

}
