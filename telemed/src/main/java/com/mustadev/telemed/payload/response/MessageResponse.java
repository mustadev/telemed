package com.mustadev.telemed.payload.response;

/**
 * @author Mustapha mustadev
 * @since version 1.0.0
 * Message Response
 */
public class MessageResponse {
	private String message;

	public MessageResponse(String message) {
	    this.message = message;
	  }

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
