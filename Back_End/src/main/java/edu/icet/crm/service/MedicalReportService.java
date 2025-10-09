package edu.icet.crm.service;

import edu.icet.crm.model.MedicalReport;

import java.util.List;

public interface MedicalReportService {
    void add(MedicalReport medicalReport);

    List<MedicalReport> getReports();

    void deleteReport(int id);

    List<MedicalReport> getByPatientId(int id);

    List<MedicalReport> getByAdminId(int id);
}
