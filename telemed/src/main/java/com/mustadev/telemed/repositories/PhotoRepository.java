package com.mustadev.telemed.repositories;



import org.springframework.data.mongodb.repository.MongoRepository;

import com.mustadev.telemed.models.Photo;

public interface PhotoRepository extends MongoRepository<Photo, String> {

	//List<Photo> findByOwnerId(String ownerId);

}
