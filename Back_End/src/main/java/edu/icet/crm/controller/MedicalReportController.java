package edu.icet.crm.controller;


import edu.icet.crm.model.MedicalReport;
import edu.icet.crm.service.MedicalReportService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/medical-report")
@RequiredArgsConstructor
public class MedicalReportController {

    final MedicalReportService medicalReportService;

    @PostMapping("/save")
    public void addMedicalReport(@RequestBody MedicalReport medicalReport){
        medicalReportService.add(medicalReport);
    }


}
