package com.telemed.rest.models;

import java.util.HashSet;
import java.util.Set;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;



/**
 * le Model Review 
 * c'est lutilisateur
 * @author Mustapha De BrainStormers
 * @since version 0.0.1
 * 
 */
@ApiModel(description = "Détails de la revue")
@Document(collection="reviews")
public class Review {
	
	/**
	 * ID du revue
	 */
	@Id
	private String id;
	
	/**
	 * le contenu de la revue
	 */
	@ApiModelProperty(notes = "le contenu de la revue")
	@NotBlank
	private String content;
	/**

	 * Id auteur de la revue
	 */
	@ApiModelProperty(notes = "auteur de la revue")
	@NotBlank
	private String patientId;
	
	/**
	 * nombre des likes
	 */
	@ApiModelProperty(notes = "nombre des likes")
	@NotNull
	private Set<Like> likes = new HashSet<Like>();
	
	/**
	 * Evaluation de Doctor
	 */
	@ApiModelProperty(notes = "nombre des likes")
	@NotNull
	@Max(5)
	@Min(1)
	private int rating = 1;
	
	
	/******** Getters and Setter and Constructors ********/
	
	
	
	public Review() {
	}



	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
	
	public String getContent() {
		return content;
	}
	
	public void setContent(String content) {
		this.content = content;
	}
	

	public Set<Like> getLikes() {
		return likes;
	}

	public void setLikes(Set<Like> likes) {
		this.likes = likes;
	}




	public int getRating() {
		return rating;
	}


	public void setRating(int rating) {
		this.rating = rating;
	}



	public String getPatientId() {
		return patientId;
	}



	public void setPatientId(String patientId) {
		this.patientId = patientId;
	}



	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((patientId == null) ? 0 : patientId.hashCode());
		return result;
	}



	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Review other = (Review) obj;
		if (patientId == null) {
			if (other.patientId != null)
				return false;
		} else if (!patientId.equals(other.patientId))
			return false;
		return true;
	}


	
	
}
