package com.mustadev.telemed.repositories;


import org.springframework.data.mongodb.repository.MongoRepository;

import com.mustadev.telemed.models.ERole;
import com.mustadev.telemed.models.Role;

public interface RoleRepository extends MongoRepository<Role, String> {
  Role findByName(ERole name);
  void deleteByName(ERole name);
}