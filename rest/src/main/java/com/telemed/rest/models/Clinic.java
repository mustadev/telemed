package com.telemed.rest.models;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.mongodb.core.mapping.DBRef;

import com.fasterxml.jackson.annotation.JsonIgnore;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

/**
 * La Clinique
 * @author Mustapha De BrainStormers
 * @since version 0.0.2
 * 
 */
@ApiModel(description = "Clinic details")
//@Document("clinics")
public class Clinic {
	
//	/**
//	 * ID de Clinique
//	 */
//	@ApiModelProperty(notes = "Clinique ID")
//	@Id
//    private String id;
	
//	/**
//	 * ID de Clinique
//	 */
//	@ApiModelProperty(notes = "Doctor ID")
//    private String doctorId;
	/**
	 * Nom de clinique
	 */
	@ApiModelProperty(notes = "Nom de clinique")
	
	private String name = "";
	/**
	 * Description de clinique
	 */
	@ApiModelProperty(notes = "Description de clinique")
    private String description = "";
	/**
	 * Prix de consultation de clinique
	 */
	@ApiModelProperty(notes = "Prix de consultation de clinique")
	private float consultPrice = 0.0f;
	/**
	 * Prix minimum
	 */
	@ApiModelProperty(notes = "Prix minimum")
	private int minPrice = 0;
	/**
	 * Prix maximum
	 */
	@ApiModelProperty(notes = "Prix maximum")
	private int maxPrice = 0;
	/**
	 * Services de clinique
	 */
	@ApiModelProperty(notes = "Services de clinique")
	private List<String> services = new ArrayList<>();
	/**
	 * Specialities de clinique
	 */
	@ApiModelProperty(notes = "Specialities de clinique")
	private List<String> specialities = new ArrayList<>();
	/**
	 * Ville de clinique
	 */
	@ApiModelProperty(notes = "Ville de clinique")
	private String city = "";
	/**
	 * Pays de clinique
	 */
	@ApiModelProperty(notes = "Pays de clinique")
	private String country = "";
	
	/**
	 * address de clinique
	 */
	@ApiModelProperty(notes = "Address de clinique")
	private String address = "";
	
	/**
	 * Emplacement de la carte de clinique
	 */
	@ApiModelProperty(notes = "Emplacement de la carte de clinique")
	private ClinicLocation location = new ClinicLocation(30.0f, -10.0f, 12); 
	
	/**
	 * Id des images de clinique
	 */
	
	@ApiModelProperty(notes = "Id des images de clinique")
	@DBRef
	@JsonIgnore
	private List<Photo> photos = new ArrayList<Photo>();
	

	
	
	

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public float getConsultPrice() {
		return consultPrice;
	}

	public void setConsultPrice(float consultPrice) {
		this.consultPrice = consultPrice;
	}

	public int getMinPrice() {
		return minPrice;
	}

	public void setMinPrice(int minPrice) {
		this.minPrice = minPrice;
	}

	public int getMaxPrice() {
		return maxPrice;
	}

	public void setMaxPrice(int maxPrice) {
		this.maxPrice = maxPrice;
	}

	public List<String> getServices() {
		return services;
	}

	public void setServices(List<String> services) {
		this.services = services;
	}

	public List<String> getSpecialities() {
		return specialities;
	}

	public void setSpecialities(List<String> specialities) {
		this.specialities = specialities;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public ClinicLocation getLocation() {
		return location;
	}

	public void setLocation(ClinicLocation location) {
		this.location = location;
	}

	public List<Photo> getPhotos() {
		return photos;
	}

	public void setPhotos(List<Photo> photos) {
		this.photos = photos;
	}
	
	
	
	
}