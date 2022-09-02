package com.grass.project.controller;
import com.grass.project.model.Admin;
import com.grass.project.model.grantType;
import com.grass.project.model.userGrants;
import com.grass.project.repository.UserGrant;
import com.grass.project.repository.grantRepository;
import com.grass.project.service.adminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.List;
//@CrossOrigin(origins="http://localhost:63342")
@RestController
public class adminController {
    @Autowired
    private adminService service;

    @Autowired
    private grantRepository g_repo;

    @Autowired
    private UserGrant U_repo;

    private BCryptPasswordEncoder bCryptPasswordEncoder;
    public adminController(
                          BCryptPasswordEncoder bCryptPasswordEncoder) {

        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }


    @PostMapping("/admin")
    public Admin addSchool(@RequestBody Admin admin) {
        admin.setPassword(bCryptPasswordEncoder.encode(admin.getPassword()));
        return service.saveAdmin(admin);
    }
    @GetMapping("/Admin/{name}")
    public Admin findAdminByName(@PathVariable String name) {
        return service.getAdminByName(name);
    }
    @PostMapping("/grant")
    public grantType addGrant(@RequestBody grantType grant) {
        return service.addGrant(grant);
    }

    @GetMapping("/grant/{id}")
    public grantType findGrant(@PathVariable long id) {
        return service.getGrantById(id);
    }


    @GetMapping("/grant/view")
    public List<grantType> findAllgrants() {
        return service.getAllgrants();
    }

    @DeleteMapping("grant/{id}")
    public String deletegrant(@PathVariable long id) {
        return service.deletegrant(id);
    }

    @GetMapping("/grant/user")
    public List<userGrants> findUsergrants() {
        return service.getUsergrants();
    }

    //only sends verified grants
    @GetMapping("/grant/verified")
    public Collection<userGrants> findVerifiedgrants() {
        return service.getVerifiedgrants();
    }


// put mapping for verify = 1



//    public void updategrant(long id, String desc,String name, int min_amnt,int max_amnt) {
//        grantType grant = g_repo.findById(id);
//        service.updateGrant(id,desc,name,min_amnt,max_amnt);
//    }
    @PutMapping("/grant/{id}")
    public ResponseEntity<grantType> updategrant(@PathVariable(value = "id") long id, @RequestBody grantType grants) throws ConfigDataResourceNotFoundException
    {
        grantType grant = g_repo.findById(id);
        grant.setName(grants.getName());
        grant.setDesc(grants.getDesc());
        grant.setMax_amnt(grants.getMax_amnt());
        grant.setMin_amnt(grants.getMin_amnt());
        grant.setActivation(grants.getActivation());
        grant.setDeactivation(grants.getDeactivation());

        final grantType updatedgrant = g_repo.save(grant);
        return ResponseEntity.ok(updatedgrant);

        //return service.updateGrant(grant);
    }


    @PutMapping("/grant/user/{id}")
    public ResponseEntity<userGrants> updateUsergrant(@PathVariable(value = "id") long id, @RequestBody userGrants Usergrant) throws ConfigDataResourceNotFoundException
    {
        userGrants grant = U_repo.findById(id);
        grant.setName(grant.getName());
        grant.setUnique_id(grant.getUnique_id());
        grant.setAmount(grant.getAmount());
        grant.setSubject(grant.getSubject());
        grant.setVerify(grant.getVerify());

        final userGrants updatedgrant = U_repo.save(grant);
        return ResponseEntity.ok(updatedgrant);

        //return service.updateGrant(grant);
    }

//    @PutMapping("/grant/{id}")
//    public grantType saveResource(@RequestBody grantType grant,@PathVariable("id") int id) {
////        grantRepository.save(grant, id);
////        return ResponseEntity.ok("resource saved");
//        return service.updateGrants(grant);
//    }

}
