package edu.icet.crm.service.impl;

import edu.icet.crm.entity.MedicalReportEntity;
import edu.icet.crm.model.MedicalReport;
import edu.icet.crm.repository.MedicalReportRepository;
import edu.icet.crm.service.MedicalReportService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
@RequiredArgsConstructor
public class MedicalReportServiceImpl implements MedicalReportService {

    final MedicalReportRepository reportRepository;
    final ModelMapper mapper;

    @Override
    public void add(MedicalReport medicalReport) {
        reportRepository.save(mapper.map(medicalReport, MedicalReportEntity.class));
    }

    @Override
    public List<MedicalReport> getReports() {
        List<MedicalReport> medicalReports=new ArrayList<>();
        reportRepository.findAll().forEach(medicalReportEntity -> {
            medicalReports.add(mapper.map(medicalReportEntity,MedicalReport.class));
        });
        return medicalReports;
    }

    @Override
    public void deleteReport(int id) {
        reportRepository.deleteById(id);
    }

    @Override
    public List<MedicalReport> getByPatientId(int id) {
        List<MedicalReport> medicalReports=new ArrayList<>();
        reportRepository.findByPatientId(id).forEach(appointmentEntity -> {
            medicalReports.add(mapper.map(appointmentEntity,MedicalReport.class));
        });
        return medicalReports;
    }

    @Override
    public List<MedicalReport> getByAdminId(int id) {
        List<MedicalReport> medicalReports=new ArrayList<>();
        reportRepository.findByAdminId(id).forEach(appointmentEntity -> {
            medicalReports.add(mapper.map(appointmentEntity,MedicalReport.class));
        });
        return medicalReports;
    }
}
