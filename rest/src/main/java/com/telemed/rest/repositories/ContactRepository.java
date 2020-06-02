package com.telemed.rest.repositories;



import org.springframework.data.mongodb.repository.MongoRepository;

import com.telemed.rest.models.Contact;


public interface ContactRepository extends MongoRepository<Contact, String> {


}
