package com.telemed.rest.models;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonIgnore;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

/**
 * le Model Doctor 
 * @author Mustapha Ouarrain
 * @since version 0.0.1
 * 
 */
@ApiModel(description = "Doctor Details")
@Document(collection = "doctors")
public class Doctor{

	/**
	 * ID de Doctor
	 */
	@ApiModelProperty(notes = "Doctor ID")
	@Id
    private String id;
	
	/**
	 * Prénom de doctor
	 */
	@ApiModelProperty(notes = "prénom de doctor")
	@NotBlank
	@Size(max = 50)
	private String firstname;

	/**
	 * Nom de doctor
	 */
	@NotBlank
	@Size(max = 50)
	@ApiModelProperty(notes = "Nom de doctor")
    private String lastname;
	

	/**
	 * Email de doctor
	 */
	@ApiModelProperty(notes = "Email de doctor")
	@NotBlank
	@Size(max = 50)
	@Email
	private String email;	

	/**
	 * Mot de Pass de doctor
	 */
	@ApiModelProperty(notes = "Mot De Pass de doctor")
	@JsonIgnore
	@NotBlank
	@Size(max = 120)
	private String password;
	
	/**
	 * Image de doctor
	 */
	@ApiModelProperty(notes = "Image de doctor")
	@DBRef
	@JsonIgnore
	private Photo avatar;
	
	/**
	 * À propos de doctor
	 */
	@ApiModelProperty(notes = "À propos de doctor")
	private String aboutMe;
	
	/**
	 * ID Clinique de doctor
	 */
	@ApiModelProperty(notes = "ID Clinique de doctor")
	@JsonIgnore
	private Clinic clinic = new Clinic();


	/**
	 * Non d'utilisateur de doctor
	 */
	@ApiModelProperty(notes = "Nom d'utilisateur de doctor")
	@NotBlank
	@Size(max = 20)
	private String username;


	
	/**
	 * les revues de doctor
	 */
	@ApiModelProperty(notes = "les revues de doctor")
	@DBRef
    private Set<Review> reviews = new HashSet<Review>();

	/**
	 * les authorité de doctor
	 */
	@JsonIgnore
	@ApiModelProperty(notes = "les authorité de doctor")
	@DBRef
	private Set<Role> roles = new HashSet<>();
	
	/**
	 * specialité de doctor
	 */
	@ApiModelProperty(notes = "specialité de doctor")
    private String speciality = "";




	/**
	 * Évaluation du Doctor
	 */
	@ApiModelProperty(notes = "Évaluation du Doctor")
    private float rating = 0.0f; //TODO set max 5.0 and min 0.0
	
	/**
	 * Nombre de évaluation du Doctor
	 */
	@ApiModelProperty(notes = "Évaluation du Doctor")
    private int averageRating = 0; //TODO set max 5.0 and min 0.0

	
	/*********** setter and getters and constructors *************/
	
	public Doctor(
			@NotBlank @Size(max = 50) String firstname,
			@NotBlank @Size(max = 50) String lastname, 
			@NotBlank @Size(max = 50) @Email String email,
			@NotBlank @Size(max = 120) String password, 
			@NotBlank @Size(max = 20) String username) {
		this.firstname = firstname;
		this.lastname = lastname;
		this.email = email;
		this.password = password;
		this.username = username;
	}

	

	public Doctor() {
	}



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


	public Photo getAvatar() {
		return avatar;
	}


	public void setAvatar(Photo avatar) {
		this.avatar = avatar;
	}


	public String getAboutMe() {
		return aboutMe;
	}


	public void setAboutMe(String aboutMe) {
		this.aboutMe = aboutMe;
	}


	public Clinic getClinic() {
		return clinic;
	}


	public void setClinic(Clinic clinic) {
		this.clinic = clinic;
	}


	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public Set<Review> getReviews() {
		return reviews;
	}


	public void setReviews(Set<Review> reviews) {
		this.reviews = reviews;
	}


	public Set<Role> getRoles() {
		return roles;
	}


	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}


	public String getSpeciality() {
		return speciality;
	}


	public void setSpeciality(String speciality) {
		this.speciality = speciality;
	}


	public float getRating() {
		return rating;
	}


	public void setRating(float rating) {
		this.rating = rating;
	}


	public int getAverageRating() {
		return averageRating;
	}


	public void setAverageRating(int averageRating) {
		this.averageRating = averageRating;
	}
	
	
    
}
