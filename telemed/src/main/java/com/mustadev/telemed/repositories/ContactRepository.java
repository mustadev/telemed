package com.mustadev.telemed.repositories;



import org.springframework.data.mongodb.repository.MongoRepository;

import com.mustadev.telemed.models.Contact;


public interface ContactRepository extends MongoRepository<Contact, String> {


}
