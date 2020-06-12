package com.mustadev.telemed.models;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;


/**
 * Modele Appointment {@link Appointment Appointment.class}
 * c'est une classe "Appointment" qui constitue toutes les attributes nécessaire pour prendre un rendez-vous
 * @author Ayoub BenHaimoud<ayoubbenhaimoud@gmail.com>
 * @since 18-03-2020
 * 
 */
@ApiModel(description = "Détails du rendez-vous")
@Document(collection = "appointments")
//@Data @ToString @AllArgsConstructor @NoArgsConstructor
public class Appointment {
	
	/**
	 * ID du rendez-vous
	 */
	@ApiModelProperty(notes = "ID du rendez-vous")
	@Id
	private String id;
	/**
	 * DoctorId: c'est ID du médecin 
	 */
	@ApiModelProperty(notes = "ID du médecin")
	private String doctorId;
	/**
	 * patientId: c'est ID du patient 
	 */
	@ApiModelProperty(notes = "ID du patient")
	private String patientId;
	/**
	 * appointmentDate: c'est la date du rendez-vous
	 */
	@ApiModelProperty(notes = "Date du rendez-vous")
	//@NotBlank @Size(max = 30)
	@DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSZ" )
	private Date appointmentDate;
	/**
	 * bookingDate: c'est la date de la réservation du rendez-vous
	 */
	@ApiModelProperty(notes ="Date de la réservation du rendez-vous")
	@DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss.SSSZ" )
	//@NotBlank @Size(max = 30)
	private Date bookingDate;
	/**
	 * status: c'est l'état du rendez-vous
	 */
	@ApiModelProperty(notes ="Etat du rendez-vous")
	//@NotBlank @Size(max = 30)
	private String state;
	/**
	 * description: c'est la description du rendez-vous
	 */
	@ApiModelProperty(notes ="Etat du rendez-vous")
	private String description;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getDoctorId() {
		return doctorId;
	}
	public void setDoctorId(String doctorId) {
		this.doctorId = doctorId;
	}
	public String getPatientId() {
		return patientId;
	}
	public void setPatientId(String patientId) {
		this.patientId = patientId;
	}
	public Date getAppointmentDate() {
		return appointmentDate;
	}
	public void setAppointmentDate(Date appointmentDate) {
		this.appointmentDate = appointmentDate;
	}
	public Date getBookingDate() {
		return bookingDate;
	}
	public void setBookingDate(Date bookingDate) {
		this.bookingDate = bookingDate;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
		
	
}
