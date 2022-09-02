package com.grass.project.repository;

import com.grass.project.model.userGrants;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Collection;

public interface UserGrant extends JpaRepository <userGrants, Long > {
    userGrants findById(long id);


    @Query(value = "SELECT u FROM userGrants u WHERE u.verify = 1 ")
    //@Query(value = "SELECT * FROM userGrants u WHERE u.verify = 1", nativeQuery = true)
    Collection<userGrants> findAllVerifyGrants();
}
