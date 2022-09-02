package com.grass.project.model;

import lombok.*;

import javax.persistence.*;
import java.util.Date;
@Getter
@Setter
@Data
@AllArgsConstructor
@NoArgsConstructor

@Entity

//@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)

@Table(name = "grantType", uniqueConstraints = @UniqueConstraint(columnNames = "desc"))
public class grantType {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String desc;
    private String name;
    private int min_amnt;
    private int max_amnt;

    private Date activation = new Date();
    private Date deactivation = new Date();


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getMin_amnt() {
        return min_amnt;
    }

    public void setMin_amnt(int min_amnt) {
        this.min_amnt = min_amnt;
    }

    public int getMax_amnt() {
        return max_amnt;
    }

    public void setMax_amnt(int max_amnt) {
        this.max_amnt = max_amnt;
    }

    public Date getActivation() {
        return activation;
    }

    public void setActivation(Date activation) {
        this.activation = activation;
    }

    public Date getDeactivation() {
        return deactivation;
    }

    public void setDeactivation(Date deactivation) {
        this.deactivation = deactivation;
    }
}
