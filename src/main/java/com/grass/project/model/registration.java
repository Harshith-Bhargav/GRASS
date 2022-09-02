package com.grass.project.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)

@Table(name = "registration", uniqueConstraints = @UniqueConstraint(columnNames = "username"))
public abstract class registration {

    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private Long id;

    @Column(name = "username")
    private String username;

    @Column
    private String email;
    @Column
    private String password;

    @Column
    private String role;

    @Column
    private int Unique_id;

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }



    public int getUnique_id() {
        return Unique_id;
    }

    public void setUnique_id(int Unique_id) {
        this.Unique_id = Unique_id;
    }
}
