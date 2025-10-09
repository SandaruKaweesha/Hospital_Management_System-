package edu.icet.crm.model;


import lombok.*;

@Data
@Setter
@Getter
@AllArgsConstructor
@ToString
@NoArgsConstructor
public class Patient {
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
