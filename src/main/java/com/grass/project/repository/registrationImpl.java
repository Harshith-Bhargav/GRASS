/*
package com.grass.project.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

@Repository
public class registrationImpl {
    @Autowired
    private EntityManager em;

    public registrationImpl save(registrationImpl user) {
        Session session = em.unwrap(Session.class);
        session.persist(user);
        return user;
    }
}
*/
