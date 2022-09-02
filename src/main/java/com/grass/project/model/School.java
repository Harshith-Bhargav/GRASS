package com.grass.project.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name =  "School", uniqueConstraints = @UniqueConstraint(columnNames = "Unique_id"))
public  class School extends registration {
    @Column
    private String Address;




    public String getAddress() {
        return Address;
    }

    public void setAddress(String address) {
        Address = address;
    }
}




   /* public String getCorrespon_mail() {
        return getEmail();
    }

    public void setCorrespon_mail(String correspon_mail) {
        this.correspon_mail = correspon_mail;
    }*/