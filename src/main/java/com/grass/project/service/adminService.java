package com.grass.project.service;

import com.grass.project.model.Admin;
import com.grass.project.model.grantType;
import com.grass.project.model.userGrants;
import com.grass.project.repository.UserGrant;
import com.grass.project.repository.adminRepository;
import com.grass.project.repository.grantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Service
public class adminService {
    @Autowired
    private adminRepository a_repo;
    @Autowired
    private grantRepository g_repo;
    @Autowired
    private UserGrant UserGrant;


    public Admin saveAdmin(Admin admin) {
        return a_repo.save(admin);
    }

    public Admin getAdminById(int id) {
        return a_repo.findById(id);
    }

    public Admin getAdminByName(String name) {
        return a_repo.findByUsername(name);
    }

    public grantType addGrant(grantType grant){
        return g_repo.save(grant);
    }

//    public void updateGrant(long id,  String desc, String name,
//                                 int min_amnt,int max_amnt){
//         g_repo.updateGrant( id, desc, name, min_amnt, max_amnt);
//    }

    public grantType updateGrants(grantType grant){
        return g_repo.save(grant);
         //ResponseEntity.ok("resource saved");
    }


    public grantType getGrantById(long id) {
        return g_repo.findById(id);
    }


   public List<grantType> getAllgrants() {
        return g_repo.findAll();
    }

    public String deleteAdmin(String username) {
        a_repo.deleteByUsername(username);
        return "admin removed !! " + username;
    }

    public String deletegrant(long id) {
        g_repo.deleteById(id);
        return "grant removed !! " + id;
    }

    public List<userGrants> getUsergrants() {
        return UserGrant.findAll();
    }

    public Collection<userGrants> getVerifiedgrants() {
        return UserGrant.findAllVerifyGrants();
    }



//    public grantType updategrant(grantType grant, long id) {
//        grantType existingGrant = g_repo.findById(grantType.getId()).orElse(null);
//        existingGrant.(grantType.getName(););
//        existingGrant.setDesc(grantType.getDesc());
//        existingGrant.setActivation(grantType.getPrice());
//        return g_repo.save(existingGrant);
//
//    }


}
