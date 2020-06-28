package com.mustadev.telemed.models;

import java.util.HashSet;
import java.util.Set;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonIgnore;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

/**
 *  classe "Admin" 
 * @author Mustapha mustadev
 * @since version 0.0.2
 * 
 */
@ApiModel(description = "Détails du Admin")
@Document(collection = "admins")
//@Data @ToString @AllArgsConstructor @NoArgsConstructor
public class Admin {
	
	/**
	 * ID d'Admin
	 */
	@ApiModelProperty(notes = "ID du Admin")
	@Id
	private String id;
	/**
	 * Prénom d'Admin.
	 */
	@ApiModelProperty(notes = "prénom du Admin")
	@NotBlank 
	@Size(max = 50)
	private String firstname;
	/**
	 * Nom du Admin.
	 */
	@ApiModelProperty(notes = "nom du Admin")
	@NotBlank 
	@Size(max = 50)
	private String lastname;
	
	/**
	 * Nom d'Admin.
	 */
	@ApiModelProperty(notes = "Non D'utilisateur du Admin")
	@NotBlank 
	@Size(max = 50)
	private String username;
	
	/**
	 * Mot de Pass d'Admin.
	 */
	@ApiModelProperty(notes = "Mot de Pass du Admin")
	@NotBlank 
	@Size(max = 50)
	@JsonIgnore
	private String password;
	
	/**
	 * Email d'Admin
	 */
	@ApiModelProperty(notes = "email du Admin.")
	@NotBlank 
	@Size(max = 70)
	@Email
    private String email;
	
	/**
	 * les authorité de employé
	 */
	@ApiModelProperty(notes = "les authorité de employé")
	@DBRef
	@NotNull
	private Set<Role> roles = new HashSet<>();

	
	/******** Getters and Setter and Constructors ****/
	
	public Admin(String id, @NotBlank @Size(max = 50) String firstname, @NotBlank @Size(max = 50) String lastname,
			@NotBlank @Size(max = 50) String username, @NotBlank @Size(max = 50) String password,
			@NotBlank @Size(max = 70) @Email String email, @NotNull Set<Role> roles) {
		super();
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.username = username;
		this.password = password;
		this.email = email;
		this.roles = roles;
	}
	
	
	public Admin() {}


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
	
	
	
}
	