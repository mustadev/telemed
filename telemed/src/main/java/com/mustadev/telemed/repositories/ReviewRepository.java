package com.mustadev.telemed.repositories;


import org.springframework.data.mongodb.repository.MongoRepository;

import com.mustadev.telemed.models.Review;

/**
 * Repository des revues des utilisateurs
 * @author Mustapha Ouarrain
 * @since version 0.0.2
 */
public interface ReviewRepository extends MongoRepository<Review, String> {


}
