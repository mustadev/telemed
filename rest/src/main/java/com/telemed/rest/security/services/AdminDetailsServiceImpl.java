package com.telemed.rest.security.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.telemed.rest.services.AdminService;


/**
 * @author Mustapha Ouarrain
 * @since version 1.0.0
 * 
 */
@Service
public class AdminDetailsServiceImpl implements UserDetailsService {
	
	public static final String PATIENT =  "PATIENT";
	public static final String DOCTOR =  "DOCTOR";
	public static final String ADMIN =  "ADMIN";
	
	@Autowired
	AdminService adminService;

	@Override
	@Transactional
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return UserDetailsImpl.build(adminService.findByEmail(username)
				.orElseThrow(() -> new UsernameNotFoundException("Admin Not Found with Email: " + username)));

	}

}
