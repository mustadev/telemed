package com.mustadev.telemed.exceptions;

import java.util.Date;



/**
 * un class pour représenter les erreurs
 * @author Mustapha De BrainStormers
 * @since 13-03-2020
 * 
 */
public class ErrorDetails {

	private Date timestamp;
	private String message;
	private String details;
	
	public ErrorDetails(Date timestamp, String message, String details) {

		super();
		this.timestamp = timestamp;
		this.message = message;
		this.details = details;
	}

	/**
	 * @return date
	 */
	public Date getTimestamp() {
		return timestamp;
	}

	/**
	 * @return message
	 */
	public String getMessage() {
		return message;
	}

	/**
	 * @return details
	 */
	public String getDetails() {
		return details;
	}

}