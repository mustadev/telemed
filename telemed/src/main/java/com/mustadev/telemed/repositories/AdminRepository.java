package com.mustadev.telemed.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.mustadev.telemed.models.Admin;

/**
 * implementation de {@link MongoRepository MongoRepository.class}
 * @author Mustapha de BrainStormers
 * @since 13-03-2020
 * 
 */
@Repository
public interface AdminRepository extends MongoRepository<Admin, String> {
	 

		Admin findByEmail(String email);
		Admin findByUsername(String username);

		boolean existsByEmail(String Email);
		boolean existsByUsername(String username);
		
		void deleteByEmail(String email);

}
