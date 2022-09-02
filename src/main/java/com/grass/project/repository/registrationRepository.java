package com.grass.project.repository;

import com.grass.project.model.registration;
import org.springframework.data.jpa.repository.JpaRepository;

public interface registrationRepository extends JpaRepository<registration, Integer> {
//    registration findByUsername(String username);
//
//    registration findByEmail(String email);
}
