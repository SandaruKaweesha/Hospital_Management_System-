package edu.icet.crm.controller;


import edu.icet.crm.model.Appointment;
import edu.icet.crm.service.AppointmentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/appointment")
@RequiredArgsConstructor
public class AppointmentController {

    final AppointmentService appointmentService;

    @PostMapping("/add")
    @ResponseStatus(HttpStatus.CREATED)
    public void addAppointment(@RequestBody Appointment appointment){
        appointmentService.addAppointment(appointment);
    }

    @PutMapping("/update")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void updateAppointment(@RequestBody Appointment appointment){
        appointmentService.addAppointment(appointment);
    }

    @DeleteMapping("/delete/{id}")
    public Boolean delete(@PathVariable int id){
        return appointmentService.deleteAppointment(id);
    }


    @GetMapping("/viewAll")
    public List<Appointment> getAll(){
        return appointmentService.getAll();
    }
    @GetMapping("/getById/{id}")
    public Appointment getAppointmentById(@PathVariable int id){
        return appointmentService.getAppointmentbyID(id);
    }

    @GetMapping("/getByAdminId/{id}")
    public List<Appointment> getAppointmentByAdminId(@PathVariable int id){
        return appointmentService.getAppointmentByAdminId(id);
    }

    @GetMapping("/getByPatientId/{id}")
    public List<Appointment> getAppointmentByPatientId(@PathVariable int id){
        return appointmentService.getAppointmentByPatientId(id);
    }
}
