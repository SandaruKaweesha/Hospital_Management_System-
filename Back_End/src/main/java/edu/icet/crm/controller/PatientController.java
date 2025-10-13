package edu.icet.crm.controller;

import edu.icet.crm.model.Patient;
import edu.icet.crm.service.PatientService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/patient")
@CrossOrigin
public class PatientController {

    final PatientService  patientService;

    @GetMapping("/get")
//    @GetMapping("/admin/get")
//    @PreAuthorize("hasRole('ADMIN')")
    public List<Patient> getData(){
        return patientService.getPatient();
    }

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public void addPatient(@RequestBody Patient patient){
        patientService.addPatient(patient);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void deleteById(@PathVariable int id){
        patientService.deleteById(id);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.OK)
    public void updatePatient(@RequestBody Patient patient){
        patientService.addPatient(patient);
    }

    @GetMapping("/search-by-name/{name}")
    public List<Patient> searchByName(@PathVariable String name){
        return patientService.searchByname(name);
    }

    @GetMapping("/search-by-category/{category}")
    public List<Patient> searchByCategory(@PathVariable String category){
        return patientService.searchByCategory(category);
    }


}
