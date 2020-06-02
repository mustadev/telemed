package com.telemed.rest.services;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Sort;
import org.springframework.transaction.annotation.Transactional;

import com.telemed.rest.models.Doctor;

/**
 * une services  pour accéder et modifier la base de données
 *  
 * @author Mustapha de BrainStormers
 * @since version 0.0.1
 */

public interface DoctorService {
	
	
	/**
	 * Trouver les doctors
	 * @return List<Doctor> 
	 */
	Optional<List<Doctor>> findAll(Sort sort);

	
	
	/**
	 * trouver un doctor par son id
	 * @param id
	 * @return Optional<Doctor> doctor
	 */
	Optional<Doctor> findById(String id);
	
	/**
	 * ajouter ou modifier un Doctor
	 * @param doctor
	 */
	@Transactional 
	Optional<Doctor> save(Doctor doctor);
	/**
	
	/**
	 * modifier un Doctor
	 * @param doctor
	 */
	Optional<Doctor> update(Doctor doctor);

     /**
     * supprimer un Doctor par son Id
     * @param id
     */
    void deleteById(String id);
    
   
 
    /**
     *  supprimer un Doctor par son Email
     * @param email
     *
     * */
    public void deleteByEmail(String email);
    
    /**
     *  supprimer tout les Doctors 
     * @param doctor
     *
     * */
    public void deleteAll();
    
    /**
     * Trouver le doctor par son Email
     * @param email
     *
     * */
    public Optional<Doctor> findByEmail(String email);
    
    
    /**
     * Trouver le doctor par son nom d'utilisateur
     * @param username
     *
     * */
    public Optional<Doctor> findByUsername(String username);
    

    /**
     * Vérifier que le doctor existe par nom d'utilisateur
     * @param username
     *
     * */
    boolean existsByUsername(String username);

    /**
     * Vérifier que le doctor existe par Email
     * @param email
     *
     * */
    boolean existsByEmail(String email);

    /**
     * chercher les doctor
     * @param city
     * @return List<Doctor> doctors
     */
	Optional<List<Doctor>> searchByCity(String city, Sort sort);

	/**
     * chercher les doctor
     * @param query
     * @param city
     * @param sort
     * @return List<Doctor> doctors
     */
	Optional<List<Doctor>> search(String query, String city, Sort sort);

	
}
