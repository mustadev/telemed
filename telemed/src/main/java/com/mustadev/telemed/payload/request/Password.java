package com.mustadev.telemed.payload.request;

import javax.validation.constraints.NotBlank;

/**
 * @author Mustapha Ouarrain
 * @since version 1.0.0
 * 
 */
public class Password {

	@NotBlank
	private String oldPassword;
	
	@NotBlank
	private String newPassword;

	public String getOldPassword() {
		return oldPassword;
	}

	public void setOldPassword(String oldPassword) {
		this.oldPassword = oldPassword;
	}

	public String getNewPassword() {
		return newPassword;
	}

	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}

	
	
}
