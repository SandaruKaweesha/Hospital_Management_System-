package edu.icet.crm.service.impl;

import edu.icet.crm.entity.AppointmentEntity;
import edu.icet.crm.model.Appointment;
import edu.icet.crm.repository.AppointmentRepository;
import edu.icet.crm.service.AppointmentService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class AppointmentServiceImpl implements AppointmentService {

    final  AppointmentRepository appointmentRepository;
    final ModelMapper mapper;

    @Override
    public void addAppointment(Appointment appointment) {
        //log.info(appointment.toString());
        appointmentRepository.save(mapper.map(appointment, AppointmentEntity.class));
    }

    @Override
    public Boolean deleteAppointment(int id) {
        appointmentRepository.deleteById(id);
        return true;
    }

    @Override
    public List<Appointment> getAll() {
        List<Appointment> appointments=new ArrayList<>();
        appointmentRepository.findAll().forEach(appointmentEntity -> {
            appointments.add(mapper.map(appointmentEntity,Appointment.class));
        });
        return appointments;
    }

    @Override
    public Appointment getAppointmentbyID(int id) {
        return mapper.map(appointmentRepository.findById(id),Appointment.class);
    }

    @Override
    public List<Appointment> getAppointmentByAdminId(int id) {
        List<Appointment> appointments=new ArrayList<>();
        appointmentRepository.findByAdminId(id).forEach(appointmentEntity -> {
            appointments.add(mapper.map(appointmentEntity,Appointment.class));
        });
        return appointments;
    }

    @Override
    public List<Appointment> getAppointmentByPatientId(int id) {
        List<Appointment> appointments=new ArrayList<>();
        appointmentRepository.findByPatientId(id).forEach(appointmentEntity -> {
            appointments.add(mapper.map(appointmentEntity,Appointment.class));
        });
        return appointments;
    }

}
