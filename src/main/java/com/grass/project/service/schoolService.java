package com.grass.project.service;

import com.grass.project.model.School;
import com.grass.project.model.userGrants;
import com.grass.project.repository.UserGrant;
import com.grass.project.repository.schoolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class schoolService {
    @Autowired
    private schoolRepository s_repo;
    @Autowired
    private UserGrant UserGrant;



    public School saveSchool(School school) {
        return s_repo.save(school);
    }

    public School getSchoolById(int id) {
        return s_repo.findById(id);
    }

    public School getSchoolByName(String name) {
        return s_repo.findByUsername(name);
    }

    public String deleteSchool(String username) {
        s_repo.deleteByUsername(username);
        return "School removed !! " + username;
    }

    public userGrants savegrants(userGrants grants) {
        return UserGrant.save(grants);
    }
}
