package com.mustadev.telemed.services;


import java.util.Optional;

import com.mustadev.telemed.models.Review;

/**
 * Service de gestion des revues
 * @author Mustapha Ouarrain
 * @since version 0.0.2
 */
public interface ReviewService {
	
	
	/**
	 * Ajouter un Revue 
	 * @param {@link Review} review
	 * @return {@link Review} review
	 */
	Optional<Review> save(Review review);
	

	/**
	 * Trouver un Revue by Id
	 * @param id
	 * @return {@link Review} review
	 */
	Optional<Review> findById(String id);



	/**
	 * Supprimer un Revue by Id
	 * @param id
	 */
	void deleteById(String id);

	/**
	 * Supprimer tous les Revue 
	 */
	void deleteAll();
}
