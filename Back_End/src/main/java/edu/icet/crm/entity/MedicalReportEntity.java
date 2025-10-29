package edu.icet.crm.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Data
@Setter
@Getter
@AllArgsConstructor
@ToString
@NoArgsConstructor
@Entity
@Table(name = "Medical_Report")
public class MedicalReportEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private  int id;
    private  String category;
    private  String pdfSrc;
    private LocalDate dateTime;
    
    private int patientId;
    private int adminId;
    private int labNumber;

}
