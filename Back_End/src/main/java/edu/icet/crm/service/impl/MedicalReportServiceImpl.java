package edu.icet.crm.service.impl;

import edu.icet.crm.entity.MedicalReportEntity;
import edu.icet.crm.model.MedicalReport;
import edu.icet.crm.repository.MedicalReportRepository;
import edu.icet.crm.service.MedicalReportService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class MedicalReportServiceImpl implements MedicalReportService {

    final MedicalReportRepository reportRepository;
    final ModelMapper mapper;

    @Override
    public void add(MedicalReport medicalReport) {
        reportRepository.save(mapper.map(medicalReport, MedicalReportEntity.class));
    }
}
