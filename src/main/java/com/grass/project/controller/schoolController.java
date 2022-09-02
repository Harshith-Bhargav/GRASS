package com.grass.project.controller;

import com.grass.project.model.School;
import com.grass.project.model.userGrants;
import com.grass.project.service.schoolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

//@CrossOrigin(origins="http://127.0.0.1:5500/School")  , produces = "application/json"
//@CrossOrigin(origins="http://localhost:63342")
@RestController
public class schoolController {
    @Autowired
    //private schoolService service;
    public schoolService service;

    private BCryptPasswordEncoder bCryptPasswordEncoder;
    public schoolController(
            BCryptPasswordEncoder bCryptPasswordEncoder) {

        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @PostMapping(value = "/School")
    public School addSchool(@RequestBody School school) {
        school.setPassword(bCryptPasswordEncoder.encode(school.getPassword()));
        return service.saveSchool(school);
    }

    /*@GetMapping("/School/{id}")
    public School findSchoolById(@PathVariable int  id) {
        return service.getSchoolById(id);
    }*/

    @GetMapping("/School/{name}")
    public School findSchoolByName(@PathVariable String name) {
        return service.getSchoolByName(name);
    }

    @PostMapping(value = "/School/grant")
    public userGrants addgrant(@RequestBody userGrants grants) {
        return service.savegrants(grants);
    }
}
