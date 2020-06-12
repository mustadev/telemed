package com.mustadev.telemed.security.services;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.mustadev.telemed.models.Admin;
import com.mustadev.telemed.models.Doctor;
import com.mustadev.telemed.models.Patient;
import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * @author Mustapha Ouarrain
 * @since version 1.0.0
 * 
 */
public class UserDetailsImpl implements UserDetails {
	private static final long serialVersionUID = 1L;
	
	public static final String PATIENT =  "PATIENT";
	public static final String DOCTOR =  "DOCTOR";
	public static final String ADMIN =  "ADMIN";

	private String id;

	private String username;

	private String email;

	@JsonIgnore
	private String password;
	
	private String userType;

	private Collection<? extends GrantedAuthority> authorities;

	public UserDetailsImpl(String id, String username, String email, String password, String userType, 
			Collection<? extends GrantedAuthority> authorities) {
		this.id = id;
		this.username = username;
		this.email = email;
		this.password = password;
		this.userType = userType;
		this.authorities = authorities;
	}

	
	/**
	 * Crée instance de UserDetailsImp apartir de Object Doctor
	 * @param doctor
	 * @return UserDetailsImpl {@link UserDetailsImpl UserDetailsImpl.class}
	 */
	public static UserDetailsImpl build(Doctor user) {
		System.out.println("UserDetailsImp called");
		List<GrantedAuthority> authorities = user.getRoles().stream()
				.map(role -> new SimpleGrantedAuthority(role.getName().name()))
				.collect(Collectors.toList());

		UserDetailsImpl userI =  new UserDetailsImpl(
				user.getId(), 
				user.getUsername(), 
				user.getEmail(),
				user.getPassword(), 
				DOCTOR,
				authorities);
		System.out.println("USER FOUND :: " + user.toString());
		return userI;
	}
	
	/**
	 * Crée instance de UserDetailsImp apartir de Object Patient
	 * @param patient
	 * @return UserDetailsImpl {@link UserDetailsImpl UserDetailsImpl.class}
	 */
	public static UserDetailsImpl build(Patient user) {
		List<GrantedAuthority> authorities = user.getRoles().stream()
				.map(role -> new SimpleGrantedAuthority(role.getName().name()))
				.collect(Collectors.toList());

		return new UserDetailsImpl(
				user.getId(), 
				user.getUsername(), 
				user.getEmail(),
				user.getPassword(), 
				PATIENT,
				authorities);
	}
	
	/**
	 * Crée instance de UserDetailsImp apartir de Object patient
	 * @param patient
	 * @return UserDetailsImpl {@link UserDetailsImpl UserDetailsImpl.class}
	 */
	public static UserDetailsImpl build(Admin user) {
		List<GrantedAuthority> authorities = user.getRoles().stream()
				.map(role -> new SimpleGrantedAuthority(role.getName().name()))
				.collect(Collectors.toList());

		return new UserDetailsImpl(
				user.getId(), 
				user.getUsername(), 
				user.getEmail(),
				user.getPassword(),
				ADMIN,
				authorities);
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return authorities;
	}

	public String getId() {
		return id;
	}

	public String getEmail() {
		return email;
	}

	@Override
	public String getPassword() {
		return password;
	}

	@Override
	public String getUsername() {
		return username;
	}
	
	public String getUserType() {
		return userType;
	}


	public void setUserType(String userType) {
		this.userType = userType;
	}


	@Override
	public boolean isAccountNonExpired() {
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}

	@Override
	public boolean isEnabled() {
		return true;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (o == null || getClass() != o.getClass())
			return false;
		UserDetailsImpl user = (UserDetailsImpl) o;
		return Objects.equals(id, user.id);
	}
}
