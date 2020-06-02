package com.telemed.rest.repositories;



import org.springframework.data.mongodb.repository.MongoRepository;

import com.telemed.rest.models.Photo;

public interface PhotoRepository extends MongoRepository<Photo, String> {

	//List<Photo> findByOwnerId(String ownerId);

}
