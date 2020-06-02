package com.telemed.rest.models;

import javax.validation.constraints.Email;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * Contacts
 * @author Belaid Atif
 * @since version 0.0.2
 * 
 */
@Document(collection = "contacts")
public class Contact {
    @Id
    private String id;
	@Email
    private String email;
    
	private String phone;  
    private String message;
    
    
    
    public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
 
}