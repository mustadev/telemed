package com.telemed.rest.payload.request;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

/**
 * @author Mustapha Ouarrain
 * @since version 1.0.0
 * 
 */
public class LoginRequest {
	
	@Email
	@NotBlank
	private String email;

	@Size(min=6)
	@NotBlank
	private String password;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
}
