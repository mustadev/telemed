package com.mustadev.telemed.models;

import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * les Image
 * @author Mustapha De BrainStormers
 * @since version 0.0.2
 * 
 */
@Document(collection = "photos")
public class Photo {
    @Id
   private String id;
     
   // private String ownerId;
         
    private Binary image;

//	public String getOwnerId() {
//		return ownerId;
//	}
//
//	public void setOwnerId(String ownerId) {
//		this.ownerId = ownerId;
//	}

	public Binary getImage() {
		return image;
	}

	public void setImage(Binary image) {
		this.image = image;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
    
    
}