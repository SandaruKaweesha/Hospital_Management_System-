package edu.icet.crm.service.impl;

import edu.icet.crm.entity.PatientEntity;
import edu.icet.crm.model.Patient;
import edu.icet.crm.repository.PatientRepository;
import edu.icet.crm.service.PatientService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import tools.jackson.databind.ObjectMapper;

import java.util.ArrayList;
import java.util.List;


@Service
@RequiredArgsConstructor
public class PantientServiceImpl implements PatientService {


    final PatientRepository patientRepository;
    //final ObjectMapper mapper;
    final ModelMapper mapper;

    @Override
    public List<Patient> getPatient(){
        List<Patient> patients =new ArrayList<Patient>();
        patientRepository.findAll().forEach(patientEntity -> {

            //Using the Model Mapper
            patients.add( mapper.map(patientEntity, Patient.class));


            //Using the Object Mapper
            //patients.add(mapper.convertValue(patientEntity,Patient.class));

        });
        return  patients;
    }

    @Override
    public void addPatient(Patient patient) {

        //patientRepository.save(mapper.convertValue(patient, PatientEntity.class));

        //Using the Model Mapper
        patientRepository.save(mapper.map(patient, PatientEntity.class));

    }

    @Override
    public void deleteById(int id) {
        patientRepository.deleteById(id);
    }

    @Override
    public List<Patient> searchByname(String name) {

        List<Patient> patients =new ArrayList<Patient>();
        patientRepository.findByName(name).forEach(patientEntity ->{
            patients.add(mapper.map(patientEntity,Patient.class));
        } );
        return patients;

    }

    @Override
    public List<Patient> searchByCategory(String category) {
        List<Patient> patients=new ArrayList<>();
        patientRepository.findByCategory(category).forEach(patientEntity -> {
            patients.add(mapper.map(patientEntity,Patient.class));
        });
        System.out.println(patients);
        return patients;
    }
}