package edu.icet.crm.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "Patient")
public class PatientEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private  String name;
    private String nic;
    private String address;
    private  String bloodGroup;
    private  String category;
    private String gender;
    private  String contact;
    private  String note;
    private  String age;
    private  String allergies;

}
