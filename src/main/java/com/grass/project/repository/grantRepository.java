package com.grass.project.repository;

import com.grass.project.model.grantType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface grantRepository extends JpaRepository<grantType, Long> {
    grantType findById(long id);
//    @Transactional
//    @Modifying
//    @Query("update grantType u set u.desc = :desc or u.name = :name or u.min_amnt = :min_amnt " +
//            "or u.max_amnt = :max_amnt or u.activation = :activation or u.deactivation = :deactivation" +
//            " where u.id = :id")
//    void updateGrant(long id, String desc, String name, int min_amnt,int max_amnt );



}
