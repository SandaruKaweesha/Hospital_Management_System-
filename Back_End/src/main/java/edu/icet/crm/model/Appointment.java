package edu.icet.crm.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Appointment {
    private int id;
    private String type;
    private String qr;
    private String dateAndtime;
    private String description;
    private String status;
    private String roomNumber;
    private int qNumber;
    private int patientId;
    private int adminId;
}
