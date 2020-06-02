package com.telemed.rest.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.telemed.rest.exceptions.ResourceAlreadyExistsException;
import com.telemed.rest.exceptions.ResourceNotFoundException;
import com.telemed.rest.models.Contact;
import com.telemed.rest.services.ContactService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiParam;


/**
 * @author  Belaid Atif
 * @since version 1.0.0
 * 
 */
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("contacts")
@Api(tags = "Contact Controlleur", value="Contact Management System")
public class ContactController {
	
	@Autowired
	private ContactService contactService;
	
	/**
	 * recuperer ls contacts
	 * @return
	 * @throws ResourceNotFoundException
	 */
	
    @GetMapping
    public ResponseEntity<List<Contact>> getAllContacts() throws ResourceNotFoundException {
           List<Contact> result = contactService
                   .findAll()
                   .orElseThrow(()-> new ResourceNotFoundException("no contact found"));
           return new ResponseEntity<>(result, HttpStatus.OK);
    }
    
    
    /**
     * send Message
     * @param contact
     * @return Contact
     * @throws ResourceAlreadyExistsException
     */
    
    
    @PostMapping
    public ResponseEntity<Contact> sendContact(
    		@ApiParam(value = "Contact", required = true)@RequestBody Contact contact) throws ResourceAlreadyExistsException{
    	Contact result = contactService.save(contact).
                    orElseThrow(() -> new ResourceAlreadyExistsException("could not create " +	contact.toString()));
        return new ResponseEntity<Contact>(result, HttpStatus.CREATED);
    }
	

}
