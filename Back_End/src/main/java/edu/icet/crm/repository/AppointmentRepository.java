package edu.icet.crm.repository;

import edu.icet.crm.entity.AppointmentEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface AppointmentRepository extends CrudRepository<AppointmentEntity,Integer> {
    List<AppointmentEntity> findByAdminId(int id);

    List<AppointmentEntity> findByPatientId(int id);
}
