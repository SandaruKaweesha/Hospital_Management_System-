package edu.icet.crm.repository;

import edu.icet.crm.entity.PatientEntity;
import edu.icet.crm.model.Patient;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PatientRepository  extends CrudRepository<PatientEntity,Integer> {
    List<PatientEntity> findByName(String name);

    List<PatientEntity> findByCategory(String category);
}
