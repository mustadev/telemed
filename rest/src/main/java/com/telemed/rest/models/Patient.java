package com.telemed.rest.models;


import java.util.HashSet;
import java.util.Set;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

/**
 * Modele Patient {@link Patient Patient.class}
 * c'est une classe "Patient" qui constitue toutes les attributes nécessaire pour un Patient
 * @author Ayoub BenHaimoud<ayoubbenhaimoud@gmail.com>
 * @since 18-03-2020
 * 
 */
@ApiModel(description = "Détails du Patient")
@Document(collection = "patients")
//@Getter @Setter @ToString @AllArgsConstructor @NoArgsConstructor
public class Patient {
	
	/**
	 * ID d'Utilisateur
	 */
	@ApiModelProperty(notes = "ID du Patient")
	@Id
	private String id;
	/**
	 * Prénom d'utilisateur.
	 */
	@ApiModelProperty(notes = "prénom du Patient")
	@NotBlank
	@Size(max = 20)
	private String firstname;
	/**
	 * Nom du Patient.
	 */
	@ApiModelProperty(notes = "nom du Patient")
	@NotBlank
	@Size(max = 20)
	private String lastname;
	
	/**
	 * Nom d'utilisateur.
	 */
	@ApiModelProperty(notes = "Non D'utilisateur du Patient")
		@NotBlank
	@Size(max = 50)
	private String username;
	
	/**
	 * Mot de pass d'utilisateur.
	 */
	@ApiModelProperty(notes = "Mot D'utilisateur du Patient")
	@JsonIgnore
	@NotBlank
	@Size(max = 30)
	private String password;
	
	
	/**
	 * Email d'utilisateur
	 */

	@ApiModelProperty(notes = "mail du Patient.")
 	@NotBlank
	@Size(max = 70)
	@Email
   private String email;
	
	@DateTimeFormat(pattern = "yyyy-MM-dd" )
	 private String birthday;
	 private String phone;
	 private String bloodGroup;
	 private String country;
	 private String city;
	 private String address;
	 private String zipCode;
	/**
	 * Image de Patient
	 */
	@ApiModelProperty(notes = "Image du Patient.")
	@DBRef
	@JsonIgnore
    private Photo avatar;
	
	/**
	 * les authorité de patient
	 */
	@ApiModelProperty(notes = "les authorité de patient")
	@DBRef
	@JsonIgnore
	private Set<Role> roles = new HashSet<>();


	/*********** Getter and Setters and Constructors **************/
	

	
	public Patient() {}
	

	public String getId() {
		return id;
	}



	public void setId(String id) {
		this.id = id;
	}




	public String getFirstname() {
		return firstname;
	}




	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}




	public String getLastname() {
		return lastname;
	}




	public void setLastname(String lastname) {
		this.lastname = lastname;
	}




	public String getUsername() {
		return username;
	}




	public void setUsername(String username) {
		this.username = username;
	}


	public String getPassword() {
		return password;
	}




	public void setPassword(String password) {
		this.password = password;
	}






	public String getBirthday() {
		return birthday;
	}


	public void setBirthday(String birthday) {
		this.birthday = birthday;
	}


	public String getPhone() {
		return phone;
	}


	public void setPhone(String phone) {
		this.phone = phone;
	}


	public String getBloodGroup() {
		return bloodGroup;
	}


	public void setBloodGroup(String bloodGroup) {
		this.bloodGroup = bloodGroup;
	}


	public String getCountry() {
		return country;
	}


	public void setCountry(String country) {
		this.country = country;
	}


	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getZipCode() {
		return zipCode;
	}


	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}


	public String getEmail() {
		return email;
	}




	public void setEmail(String email) {
		this.email = email;
	}




	public Set<Role> getRoles() {
		return roles;
	}




	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}

	public Photo getAvatar() {
		return avatar;
	}

	public void setAvatar(Photo avatar) {
		this.avatar = avatar;
	}
	
	
 
}
