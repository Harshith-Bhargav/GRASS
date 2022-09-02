package com.grass.project.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
@Data
@AllArgsConstructor
//@NoArgsConstructor
@Entity
@Table(name =  "Admin", uniqueConstraints = @UniqueConstraint(columnNames = "Unique_id"))
public class Admin extends registration {




}
