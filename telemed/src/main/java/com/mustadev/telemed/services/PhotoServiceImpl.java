package com.mustadev.telemed.services;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mustadev.telemed.models.Photo;
import com.mustadev.telemed.repositories.PhotoRepository;

/**
 * Service de gestion des images des utilisateurs
 * @author Mustapha mustadev
 * @since version 0.0.2
 */

@Service
public class PhotoServiceImpl implements PhotoService {
 
    @Autowired
    private PhotoRepository photoRepository;
 
    @Override
	public Optional<Photo> save(Photo photo){ 
        return Optional.ofNullable(photoRepository.save(photo)); 
    }
 

    @Override
	public Optional<Photo> findById(String id) { 
        return photoRepository.findById(id); 
    }


//	@Override
//	public Optional<List<Photo>> findByOwnerId(String ownerId) {
//		
//		return Optional.ofNullable(photoRepository.findByOwnerId(ownerId));
//	}


	@Override
	public void deleteById(String id) {
		photoRepository.deleteById(id);
		
	}


	@Override
	public void deleteAll() {
		photoRepository.deleteAll();
		
	}
}