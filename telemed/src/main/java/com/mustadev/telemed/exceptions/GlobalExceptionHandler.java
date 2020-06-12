package com.mustadev.telemed.exceptions;
import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
//import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

/**
 * cette classe pour gérer les exceptions
 * @author Mustapha De BrainStormers
 * @since 13-03-2020
 * 
 */
@RestControllerAdvice
public class GlobalExceptionHandler {

	/**
	 * générer une réponse globale
	 * @param ex ResourceNotFoundException jeter
	 * @param request WebRequest
	 * @return ResponseEntity 
	 */
	@ExceptionHandler(ResourceNotFoundException.class)
 	public ResponseEntity<?> resourceNotFoundException(ResourceNotFoundException ex, WebRequest request) {
		ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(), request.getDescription(false));
		return new ResponseEntity<>(errorDetails, HttpStatus.NOT_FOUND);

	}

	/**
	 * générer une réponse globale
	 * @param ex ResourceNotFoundException jeter
	 * @param request WebRequest
	 * @return ResponseEntity 
	 */
	@ExceptionHandler(ResourceAlreadyExistsException.class)
 	public ResponseEntity<?> ResourceAlreadyExistsException(ResourceAlreadyExistsException ex, WebRequest request) {
		ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(), request.getDescription(false));
		return new ResponseEntity<>(errorDetails, HttpStatus.CONFLICT);

	}

	/**
	 * générer une réponse globale
	 * @param ex Exception jeter
	 * @param request WebRequest 
	 * @return ResponseEntity 
	 * @throws Exception 
	 */
	@ExceptionHandler(Exception.class)
 	public ResponseEntity<?> globleExcpetionHandler(Exception ex, WebRequest request) {
//		if (ex instanceof AccessDeniedException ) throw ex;
	  	ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(), request.getDescription(false));
	  	return new ResponseEntity<>(errorDetails, HttpStatus.INTERNAL_SERVER_ERROR);

	}
	
	
	@ExceptionHandler(AccessDeniedException.class)
 	public ResponseEntity<?> AccessDeniedExceptionHandler(AccessDeniedException ex, WebRequest request) throws AccessDeniedException {
		throw ex;
	}


}