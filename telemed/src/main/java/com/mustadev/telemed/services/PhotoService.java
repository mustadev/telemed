package com.mustadev.telemed.services;


import java.util.Optional;

import com.mustadev.telemed.models.Photo;

/**
 * Service de gestion des images des utilisateurs
 * @author Mustapha mustadev
 *
 */
public interface PhotoService {
	
	
	/**
	 * Ajouter un Image d'Utilisateur
	 * @param {@link Photo} photo
	 * @return {@link Photo} photo
	 */
	Optional<Photo> save(Photo photo);
	

	/**
	 * trouver un Image by Id
	 * @param id
	 * @return {@link Photo} photo
	 */
	Optional<Photo> findById(String id);


	
	/**
	 * Supprimer un Image by Id
	 * @param id
	 */
	void deleteById(String id);

	/**
	 * Supprimer tous les Images
	 */
	void deleteAll();
}