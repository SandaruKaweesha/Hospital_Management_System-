package edu.icet.crm.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "Appointment")
public class AppointmentEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String type;
    private String qr;
    private LocalDate dateAndtime;
    private String description;
    private String status;
    private int roomNumber;
    private int qNumber;

    private int patientId;
    private int adminId;
}
