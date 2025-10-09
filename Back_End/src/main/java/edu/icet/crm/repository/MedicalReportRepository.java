package edu.icet.crm.repository;

import edu.icet.crm.entity.MedicalReportEntity;
import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface MedicalReportRepository extends CrudRepository<MedicalReportEntity,Integer> {

    List<MedicalReportEntity> findByAdminId(int id);

    List<MedicalReportEntity> findByPatientId(int id);
}
