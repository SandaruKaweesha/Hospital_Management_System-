package edu.icet.crm.service;

import edu.icet.crm.model.Appointment;

import java.util.List;

public interface AppointmentService {
    void addAppointment(Appointment appointment);

    Boolean deleteAppointment(int id);

    List<Appointment> getAll();

    Appointment getAppointmentbyID(int id);

    List<Appointment> getAppointmentByAdminId(int id);

    List<Appointment> getAppointmentByPatientId(int id);
}
