package edu.icet.crm.repository;

import edu.icet.crm.entity.MedicalReportEntity;
import org.springframework.data.repository.CrudRepository;

public interface MedicalReportRepository extends CrudRepository<MedicalReportEntity,Integer> {
}
