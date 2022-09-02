package com.grass.project.repository;

import com.grass.project.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface adminRepository extends JpaRepository<Admin, String> {
    Admin findByUsername(String username);
    Admin findById(int id);
    Admin findByEmail(String email);
    Admin deleteByUsername(String username);
}
