package com.grass.project.repository;

import com.grass.project.model.School;
import org.springframework.data.jpa.repository.JpaRepository;

public interface schoolRepository extends JpaRepository<School, String> {
    School findByUsername(String username);
    School findById(int id);
    School deleteByUsername(String username);
}