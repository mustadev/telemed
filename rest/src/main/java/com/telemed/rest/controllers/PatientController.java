package com.telemed.rest.controllers;


import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.telemed.rest.exceptions.ResourceAlreadyExistsException;
import com.telemed.rest.exceptions.ResourceNotFoundException;
import com.telemed.rest.models.Doctor;
import com.telemed.rest.models.Patient;
import com.telemed.rest.models.Photo;
import com.telemed.rest.payload.request.Password;
import com.telemed.rest.payload.response.MessageResponse;
import com.telemed.rest.services.PatientService;
import com.telemed.rest.services.PhotoService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

/**
 * @Author Ayoub Benhaimoud <ayoubbenhaimoud@gmail.com>
 * @since 17-03-2020
 */
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("patients")
@Api(tags = "Patient Controlleur", value="Patient Management System")
public class PatientController {

    private final static Logger logger = LoggerFactory.getLogger(PatientController.class);


    @Autowired
    private PatientService patientService;

    @Autowired 
    private PhotoService photoService;
    
    @Autowired
    private PasswordEncoder encoder;
    /**
     * pour trouver tous les patientes
     * @return List<Patient>
     * @throws ResourceNotFoundException
     */
    @GetMapping(value = {"","/"})//TODO AYOUB REMOVE "/" you don't need "/"
    public ResponseEntity<List<Patient>> getAllPatients() throws ResourceNotFoundException {
           List<Patient> result = patientService
                   .findAll()
                   .orElseThrow(()-> new ResourceNotFoundException("no patient found"));
           return new ResponseEntity<>(result, HttpStatus.OK);
    }

    /**
     * récupérer un patient en utilisant son id
     * @param id
     * @return {@link ResponseEntity}
     * @throws ResourceNotFoundException
     */
    @GetMapping(value= "/{id}")
    public ResponseEntity<Patient> getPatientById(@PathVariable("id") String id) throws ResourceNotFoundException {
              logger.debug("get patient with id :"+id);
              Patient result= patientService.findPatientById(id)
                              .orElseThrow(()->{
                                  return new ResourceNotFoundException("No patient with this id : " + id );
                              });
              return new ResponseEntity<Patient>(result,HttpStatus.OK);
    }

    /**
     * cette méthode sert à créer un patient
     * @param patient
     * @return patient
     * @throws ResourceAlreadyExistsException
     * @throws ResourceNotFoundException 
     */
    @PostMapping(value = {"","/"})
    public ResponseEntity<Patient> createPatient(
    		@ApiParam(value = "Patient", required = true)@RequestBody Patient patient) throws ResourceAlreadyExistsException{
    	Patient result = patientService.insertPatient(patient)
                    .orElseThrow(() -> new ResourceAlreadyExistsException("could not create " +	patient.toString()));
        return new ResponseEntity<Patient>(result, HttpStatus.CREATED);
    }

    /**
     * cette méthode sert à modifier un patient
     * @param patient
     * @return patient
     * @throws ResourceNotFoundException
     */
    @PutMapping(value = {"","/"})
    public ResponseEntity<Patient> updatePatient(@RequestBody Patient patient) throws ResourceNotFoundException{
    	Patient old = patientService.findPatientById(patient.getId())
    			.orElseThrow(() -> new ResourceNotFoundException("could not find " +	patient.toString()));
        patient.setEmail(old.getEmail());
        patient.setUsername(old.getUsername());
        patient.setAvatar(old.getAvatar());
        patient.setPassword(old.getPassword());
        patient.setRoles(old.getRoles());
    	Patient result = patientService.updatePatient(patient)
                .orElseThrow(() -> new ResourceNotFoundException("could not update " +	patient.toString()));
        return new ResponseEntity<Patient>(result, HttpStatus.CREATED);
    }

    /**
     * cette méthode sert à supprimer un patient en utilisant son id
     * @param id
     * @return HttpStatus
     */
    @DeleteMapping(value="/{id}")
    public ResponseEntity<Map<String,Object>> deletePatient(@PathVariable String id){
    	patientService.deletePatientById(id);
        Map<String,Object> msg = new HashMap<>();
        msg.put("patientId", id);
        msg.put("message","patient successfully deleted !");
        return new ResponseEntity<Map<String, Object>>(msg , HttpStatus.OK);
    }

    
    /**
     * Ajouter Image du Patient
     * @param photo
     * @return Photo id
     */
	@ApiOperation(value = "Ajouter Image du Patient", response = Photo.class)
	@PostMapping("/{id}/avatar")
	public ResponseEntity<Photo> uploadPhoto(
			@PathVariable("id") String id,
			@RequestParam("avatar") MultipartFile file) throws Exception, IOException{
	    Photo photo = new Photo(); 
 
	    Patient patient = patientService.findPatientById(id)
	    		.orElseThrow(() -> new ResourceNotFoundException("Could Find Patient: " + id));;
			photo.setImage(new Binary(BsonBinarySubType.BINARY, file.getBytes()));
			//photo.setOwnerId(id);
			photo = photoService.save(photo).orElseThrow(() -> new Exception("photo could not be saved"));
			
			patient.setAvatar(photo);
			patientService.save(patient);
		    return ResponseEntity.ok().body(photo);
		   
		 
	   
	  }
	
	/**
     * Trouver Image du Patient
     * @param photo
     * @return Photo Base64 Encoded
     */
	@ApiOperation(value = "Trouver Image du Patient", response = Photo.class)
	@GetMapping("/{id}/avatar")
	  public ResponseEntity<Photo> getPhoto(@PathVariable("id") String id) throws ResourceNotFoundException {
			Patient patient = patientService
					.findPatientById(id)
					.orElseThrow(()-> new ResourceNotFoundException("could not find Patient with id"));
			return ResponseEntity.ok().body(patient.getAvatar());
	    }

	/**
     * Update Image du Patient
     * @param photoId 
     * @param file
     * @return Photo Base64 Encoded
     */
	@ApiOperation(value = "Update Image du Patient", response = ResponseEntity.class)
	@PutMapping("/{id}/avatar")
	  public ResponseEntity<Photo> getUpdatePhoto(
			  @PathVariable("id") String id, 
			  @RequestParam("photo") MultipartFile file) throws ResourceNotFoundException , IOException{
		
			Patient patient = patientService
					.findPatientById(id)
					.orElseThrow(()-> new ResourceNotFoundException("could not find Patient with id" + id));
			Photo photo = patient.getAvatar();
				photo.setImage(new Binary(BsonBinarySubType.BINARY, file.getBytes()));
				
					patient.setAvatar(photoService
							.save(photo)
							.orElseThrow(() -> new ResourceNotFoundException("could Not update Photo")));
				patientService.save(patient);
				
			    return ResponseEntity.ok().body(photo);
			 
	  }
	

	@ApiOperation(value = "modifier le mot de pass", response = MessageResponse.class)
	@PostMapping("/{id}/password")
	public ResponseEntity<MessageResponse> changePassowrd(
			@PathVariable("id") String id,
			@RequestBody @Valid Password password ) throws ResourceNotFoundException{
		Patient patient = patientService.findPatientById(id)
				.orElseThrow(() -> new ResourceNotFoundException("could not Find Patient  with ID: " + id));
		
		//String oldPassword = encoder.encode(password.getOldPassword());
		//String originalPassword = doctor.getPassword();
//		System.out.println(" :::::::::::::oldPassword: "+ oldPassword);
//		System.out.println(":::::::::::::: Original Password: "+ originalPassword);
		if (encoder.matches(password.getOldPassword(), patient.getPassword())) {
			patient.setPassword(encoder.encode(password.getNewPassword()));
			patientService.save(patient)
			.orElseThrow(() -> new ResourceNotFoundException("could not Save Doctor  with ID: " + id));
			return ResponseEntity.status(HttpStatus.OK).body(new MessageResponse("Password Changed"));
			}
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MessageResponse("Old Password Is Not Correct"));
			
	}

}
