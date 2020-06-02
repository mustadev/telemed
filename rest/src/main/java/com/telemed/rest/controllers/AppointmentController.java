package com.telemed.rest.controllers;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.telemed.rest.exceptions.ResourceAlreadyExistsException;
import com.telemed.rest.exceptions.ResourceNotFoundException;
import com.telemed.rest.models.Appointment;
import com.telemed.rest.models.Patient;
import com.telemed.rest.services.AppointmentService;
import com.telemed.rest.services.PatientService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 
 * @Author Ayoub Benhaimoud <ayoubbenhaimoud@gmail.com>
 * @since 17-03-2020
 */
@ApiOperation(value="API pour les opérations sur les rendez-vous.", response=Appointment.class)
@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "appointments")
public class AppointmentController {

    private final static Logger logger = (Logger) LoggerFactory.getLogger(AppointmentController.class);

    private final AppointmentService appointmentService;

    public AppointmentController(AppointmentService appointmentService) {
        this.appointmentService = appointmentService;
    }

    /**
     * pour trouver tous les rendez vous
     * @return List<Appointment>
     * @throws ResourceNotFoundException
     */
            
    @ApiOperation(value = "Récupère tous les rendez-vous à condition que ceux-ci soiyons en stock!", response = List.class)
    @GetMapping(value = {""},produces = "application/json" )
    public ResponseEntity<List<Appointment>> getAllAppointments() throws ResourceNotFoundException {
           List<Appointment> result = appointmentService
                   .findAll()
                   .orElseThrow(()-> new ResourceNotFoundException("no patient found"));
           result.forEach((appointment)-> {
                    String msg = String.format("appointment id : %s",appointment.getId());
                    logger.debug(msg);
           });
           return new ResponseEntity<>(result, HttpStatus.OK);
    }

    /**
     * récupérer un rendez-vous en utilisant son id
     * @param id
     * @return {@link ResponseEntity}
     * @throws ResourceNotFoundException
     */
    @ApiOperation(value = "Récupère un rendez-vous grâce à son ID à condition que celui-ci soit en stock!", response = Appointment.class)
    @GetMapping(value= "/{id}", produces ="application/json")
    public ResponseEntity<Appointment> getAppointmentById(@PathVariable("id") String id) throws ResourceNotFoundException {
              logger.debug("get patient with id :"+id);
              Appointment result= appointmentService.findAppointmentById(id)
                              .orElseThrow(()->{
                                  return new ResourceNotFoundException("No Appointment with this id : " + id );
                              });
              return new ResponseEntity<Appointment>(result,HttpStatus.OK);
    }

    /**
     * cette méthode sert à prendre un rendez-vous
     * @param appointment
     * @return appointment
     * @throws ResourceAlreadyExistsException
     * @throws ResourceNotFoundException 
     */
    @ApiOperation(value = "prendre un rendez-vous ", response = Appointment.class, code = 200)
    @PostMapping(value = {""}, consumes = "application/json", produces = "application/json")
    public ResponseEntity<Appointment> createAppointment(
    		@ApiParam(value = "Appointment", required = true) @RequestBody Appointment appointment) throws ResourceAlreadyExistsException{
    	Appointment result = appointmentService.insertAppointment(appointment)
                    .orElseThrow(() -> new ResourceAlreadyExistsException("could not create " +	appointment.toString()));
        return new ResponseEntity<Appointment>(result, HttpStatus.CREATED);
    }

    /**
     * cette méthode sert à modifier un rendez-vous
     * @param appointment
     * @return appointment
     * @throws ResourceNotFoundException
     */
    @ApiOperation(value = "modifier un rendez-vous ", response = Appointment.class, code =200)
    @PutMapping(value = {""},consumes = "application/json", produces = "application/json")
    public ResponseEntity<Appointment> updateAppointment(@RequestBody Appointment appointment) throws ResourceNotFoundException{
    	Appointment result = appointmentService.updateAppointment(appointment)
                .orElseThrow(() -> new ResourceNotFoundException("could not update " +	appointment.toString()));
        return new ResponseEntity<Appointment>(result, HttpStatus.CREATED);
    }

    /**
     * cette méthode sert à supprimer un rendez-vous en utilisant son id
     * @param id
     * @return HttpStatus
     */
    @ApiOperation(value = "Supprimer un rendez-vous grâce à son ID à condition que celui-ci soit en stock! ", response = Appointment.class)
    @DeleteMapping(value = {"/{id}"}, produces = "application/json")
    public ResponseEntity<Map<String,Object>> deleteAppointment(@PathVariable String id){
    	appointmentService.deleteAppointmentById(id);
        Map<String,Object> msg = new HashMap<>();
        msg.put("AppointmentId", id);
        msg.put("message","Appointment successfully deleted !");
        return new ResponseEntity<Map<String, Object>>(msg , HttpStatus.OK);
    }


    @GetMapping(value = {"/doctor/{doctorId}"},produces = "application/json" )
    public ResponseEntity<List<Appointment>> getAllDoctorAppoitment(@PathVariable String doctorId) throws ResourceNotFoundException {
           List<Appointment> result = appointmentService
        		   .findAppotByDoctorId(doctorId)
                   .orElseThrow(()-> new ResourceNotFoundException("no Doctor Appoitment found"));
           result.forEach((appointment)-> {
                    String msg = String.format("appointment id : %s",appointment.getId());
                    logger.debug(msg);
           });
           return new ResponseEntity<>(result, HttpStatus.OK);
    }
    
    @GetMapping(value = {"/patient/{patientId}"},produces = "application/json" )
    public ResponseEntity<List<Appointment>> getAllPatientAppoitment(@PathVariable String patientId) throws ResourceNotFoundException {
           List<Appointment> result = appointmentService
        		   .findAppotByPatientId(patientId)
                   .orElseThrow(()-> new ResourceNotFoundException("no Patient Appoitmentfound"));
           result.forEach((appointment)-> {
                    String msg = String.format("appointment id : %s",appointment.getId());
                    logger.debug(msg);
           });
           return new ResponseEntity<>(result, HttpStatus.OK);
    }

}
