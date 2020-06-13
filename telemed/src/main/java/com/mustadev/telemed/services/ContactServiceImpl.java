package com.mustadev.telemed.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mustadev.telemed.models.Contact;
import com.mustadev.telemed.repositories.ContactRepository;


@Service
public class ContactServiceImpl implements ContactService {
 
    @Autowired
    private ContactRepository contactRepository;

	@Override
	public Optional<Contact> save(Contact contact) {
		return Optional.of(contactRepository.save(contact))  ;
		
	}

	@Override
	public Optional<List<Contact>> findAll() {
		return Optional.of(contactRepository.findAll());
		
	}

	@Override
	public void deleteAll() {
		contactRepository.deleteAll();
		
		
	}
 

 
}