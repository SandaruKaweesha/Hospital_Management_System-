package edu.icet.crm.model;

import lombok.*;

import java.time.LocalDate;

@Data
@Setter
@Getter
@AllArgsConstructor
@ToString
@NoArgsConstructor
public class MedicalReport {
    private  int id;
    private  String category;
    private  String pdfSrc;
    private LocalDate dateTime;

    private int patientId;
    private int adminId;
    private int labNumber;

}
