package edu.icet.crm.controller;


import edu.icet.crm.model.MedicalReport;
import edu.icet.crm.service.MedicalReportService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/medical-report")
@RequiredArgsConstructor
@Slf4j
public class MedicalReportController {

    final MedicalReportService medicalReportService;

    @PostMapping("/save")
    public void addMedicalReport(@RequestBody MedicalReport medicalReport){
        medicalReportService.add(medicalReport);
    }


    @GetMapping("/getAll")
    public List<MedicalReport> getReports(){
        return medicalReportService.getReports();
    }


    @DeleteMapping("/delete/{id}")
    public  void deleteReport(@PathVariable int id){
        medicalReportService.deleteReport(id);
    }
/// /////////////////////////////
    @GetMapping("/getByPatientId/{id}")
    public List<MedicalReport> getByPatientId(@PathVariable int id){
        System.out.println(id);
        return medicalReportService.getByPatientId(id);
    }

    @GetMapping("/getByAdminId/{id}")
    public List<MedicalReport> getByAdminId(@PathVariable int id){
        return medicalReportService.getByAdminId(id);
    }




}
