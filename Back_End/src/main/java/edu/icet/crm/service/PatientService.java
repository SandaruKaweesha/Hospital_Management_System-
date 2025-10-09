package edu.icet.crm.service;

import edu.icet.crm.model.Patient;

import java.util.List;

public interface PatientService {
    List<Patient> getPatient();

    void addPatient(Patient patient);

    void deleteById(int id);

    List<Patient> searchByname(String name);

    List<Patient> searchByCategory(String category);
}
