package com.telemed.rest.repositories;


import org.springframework.data.mongodb.repository.MongoRepository;

import com.telemed.rest.models.Review;

/**
 * Repository des revues des utilisateurs
 * @author Mustapha Ouarrain
 * @since version 0.0.2
 */
public interface ReviewRepository extends MongoRepository<Review, String> {


}
