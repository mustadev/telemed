package com.telemed.rest.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * rôles d'utilisateur
 * @author Mustapha De BrainStormers
 * @since version 0.0.2
 * 
 */
@Document(collection = "roles")
public class Role {
  @Id
  private String id;

  private ERole name;
  
  public Role(ERole name) {
	  this.name = name;
  }

  /******** Getters and Setter****/
public String getId() {
	return id;
}

public void setId(String id) {
	this.id = id;
}

public ERole getName() {
	return name;
}

public void setName(ERole name) {
	this.name = name;
}
  
  

}
