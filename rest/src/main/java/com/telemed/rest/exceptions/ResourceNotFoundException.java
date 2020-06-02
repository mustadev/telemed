package com.telemed.rest.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;


/**
 * cette classe hérite de {@link Exception Exception.class} 
 * c'est un exception qui va etre jeter quand un resource n'existe pas 
 * @author Ayoub BenHaimoud <ayoubenhaimoud@gmail.com>
 * @since 15-03-2020
 * 
 */
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends Exception{

 private static final long serialVersionUID = 1L;
 
 public ResourceNotFoundException(String message){

     super(message);

    }

}