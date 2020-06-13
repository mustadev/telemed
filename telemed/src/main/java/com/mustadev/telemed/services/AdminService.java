package com.mustadev.telemed.services;

import java.util.List;
import java.util.Optional;

import com.mustadev.telemed.models.Admin;

/**
 * une services  pour accéder et modifier la base de données
 * de Admin
 *  
 * @author Mustapha Ouarrain
 * @since version 0.0.1
 */

public interface AdminService {
	
	
	/**
	 * Trouver les doctors
	 * @return List<Doctor> 
	 */
	Optional<List<Admin>> findAll();

	
	/**
	 * trouver un Admin par son id
	 * @param id
	 * @return Optional<Employe>
	 */
	Optional<Admin> findById(String id);
	
	/**
	 * ajouter ou modifier un Admin
	 * @param admin
	 */
	Optional<Admin> save(Admin admin);
	/**
	
	/**
	 * modifier un Admin
	 * @param doctor
	 */
	Optional<Admin> update(Admin admin);

     /**
     * supprimer un Admin par son Id
     * @param id
     */
    void deleteById(String id);

 
    /**
     *  supprimer un Admin par son Email
     * @param doctor
     *
     * */
    public void deleteByEmail(String email);
    
    /**
     *  supprimer tout les Admins 
     * @param doctor
     *
     * */
    public void deleteAll();
    
    /**
     * Trouver le Admin par son Email
     * @param email
     *
     * */
    public Optional<Admin> findByEmail(String email);
    
    
    /**
     * Trouver le Admin par son nom d'utilisateur
     * @param username
     *
     * */
    public Optional<Admin> findByUsername(String username);
    

    /**
     * Vérifier que le Admin existe par nom d'utilisateur
     * @param username
     *
     * */
    boolean existsByUsername(String username);

    /**
     * Vérifier que le Admin existe par Email
     * @param email
     *
     * */
    boolean existsByEmail(String email);

	
}