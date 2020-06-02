package com.telemed.rest.repositories;


import org.springframework.data.mongodb.repository.MongoRepository;

import com.telemed.rest.models.ERole;
import com.telemed.rest.models.Role;

public interface RoleRepository extends MongoRepository<Role, String> {
  Role findByName(ERole name);
  void deleteByName(ERole name);
}