package com.telemed.rest.controllers;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.telemed.rest.models.Admin;
import com.telemed.rest.models.Doctor;
import com.telemed.rest.models.ERole;
import com.telemed.rest.models.Patient;
import com.telemed.rest.models.Role;
import com.telemed.rest.payload.request.LoginRequest;
import com.telemed.rest.payload.request.SignupRequest;
import com.telemed.rest.payload.response.JwtResponse;
import com.telemed.rest.payload.response.MessageResponse;
import com.telemed.rest.security.AuthProviders.AdminAuthenticationProvider;
import com.telemed.rest.security.AuthProviders.DoctorAuthenticationProvider;
import com.telemed.rest.security.AuthProviders.PatientAuthenticationProvider;
import com.telemed.rest.security.jwt.JwtUtils;
import com.telemed.rest.security.services.UserDetailsImpl;
import com.telemed.rest.services.AdminService;
import com.telemed.rest.services.DoctorService;
import com.telemed.rest.services.PatientService;
import com.telemed.rest.services.RoleService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;



/**
 * @author Mustapha Ouarrain
 * @since version 1.0.0
 * 
 */
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@Api(tags = "Authentification Controlleur", value="Authentification System")
@RequestMapping("/api/auth")
public class AuthController {
	@Autowired
	AdminAuthenticationProvider adminAuthenticationProvider;
	
	@Autowired
	DoctorAuthenticationProvider doctorAuthenticationProvider;
	@Autowired
	PatientAuthenticationProvider patientAuthenticationProvider;
	

	@Autowired
	DoctorService doctorService;
	
	@Autowired
	PatientService patientService;
	
	@Autowired
	AdminService adminService;
	

	@Autowired
	RoleService roleService;

	@Autowired
	PasswordEncoder encoder;

	@Autowired
	JwtUtils jwtUtils;

	
	
	/**
	 * Authentifie le doctors
	 * @param loginRequest
	 * @return JwtResponse
	 */
	@PostMapping("/doctor/signin")
	@ApiOperation(value = "Authentifie le doctors", response = ResponseEntity.class)
	public ResponseEntity<?> authenticateDoctor(@Valid @RequestBody LoginRequest loginRequest) {
		return authenticate(loginRequest, doctorAuthenticationProvider);
	}
	
	/**
	 * Authentifie le patient
	 * @param loginRequest
	 * @return JwtResponse
	 */
	@PostMapping("/patient/signin")
	@ApiOperation(value = "Authentifie le patient", response = ResponseEntity.class)
	public ResponseEntity<?> authenticatePatient(@Valid @RequestBody LoginRequest loginRequest) {	
		return authenticate(loginRequest, patientAuthenticationProvider);
	}
	/**
	 * Authentifie l'admin
	 * @param loginRequest
	 * @return JwtResponse
	 */
	@PostMapping("/admin/signin")
	@ApiOperation(value = "Authentifie l'admin", response = ResponseEntity.class)
	public ResponseEntity<?> authenticateAdmin(@Valid @RequestBody LoginRequest loginRequest) {
		return authenticate(loginRequest, adminAuthenticationProvider);
	}
	
	/**
	 * @param loginRequest
	 * @return JwtResponse
	 */
	public ResponseEntity<?> authenticate(@Valid @RequestBody LoginRequest loginRequest, DaoAuthenticationProvider daoAuthenticationProvider) {
		System.out.println(":::::::::::::::::::::::::::::::::::: SIGNIN");
		System.out.println(":::::::::::::::::::username : " + loginRequest.getEmail());
		System.out.println(":::::::::::::::::::password : " + loginRequest.getPassword());
	
		try {
			 
			
			Authentication authentication = daoAuthenticationProvider.authenticate(
					new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
			System.out.println("::::::::::::::::::: after authenticationmanager : " + loginRequest.getEmail());
			SecurityContextHolder.getContext().setAuthentication(authentication);
			String jwt = jwtUtils.generateJwtToken(authentication);
			
			UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();		
			List<String> roles = userDetails.getAuthorities().stream()
					.map(item -> item.getAuthority())
					.collect(Collectors.toList());

			return ResponseEntity.ok(new JwtResponse(jwt, 
													 userDetails.getId(), 
													 userDetails.getUsername(), 
													 userDetails.getEmail(), 
													 userDetails.getUserType(),
													 roles));
		}catch (AuthenticationException ex) {
			System.out.println(ex);
			return  ResponseEntity
					.badRequest()
					.body(new MessageResponse("Bad Credentials"));
		}	
		
		
	}
	
	
	/**
	 * Inscrire un médecin
	 * @param signUpRequest
	 * @return MessageResponse
	 */
	@PostMapping("/doctor/signup") //TODO add throw  Exception
	@ApiOperation(value = "Inscrire un médecin", response = MessageResponse.class)
	public ResponseEntity<MessageResponse> registerUser(@Valid @RequestBody SignupRequest signUpRequest) {
		System.out.println("username : " + signUpRequest.getUsername());
		System.out.println("lastname : " + signUpRequest.getLastname());
		System.out.println("firstname : " + signUpRequest.getFirstname());
		System.out.println("email : " + signUpRequest.getEmail());
		System.out.println("password : " + signUpRequest.getPassword());
		System.out.println("phone : " + signUpRequest.getPhone());
		if (doctorService.existsByUsername(signUpRequest.getUsername())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Username is already taken!"));
		}

		if (doctorService.existsByEmail(signUpRequest.getEmail())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Email is already in use!"));
		}

		// Create new user's account
		Doctor user = new Doctor();
		user.setUsername(signUpRequest.getUsername());
		user.setLastname(signUpRequest.getLastname());
		user.setFirstname(signUpRequest.getFirstname());
		user.setEmail( signUpRequest.getEmail());
		user.setPassword(encoder.encode(signUpRequest.getPassword()));
		//user.setPhone(encoder.encode(signUpRequest.getPassword())); //ADD phone to Doctor
		Set<Role> roles = new HashSet<>();
		Role userRole = roleService.findByName(ERole.ROLE_USER)
				.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
		Role doctorRole = roleService.findByName(ERole.ROLE_DOCTOR)
				.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
		roles.add(userRole);
		roles.add(doctorRole);

		user.setRoles(roles);
		Optional<Doctor> doc = doctorService.save(user);
		
		if(!doc.isPresent()) {
			System.out.println(":::::::::::::::::::::: DOC IS NULL!!!");
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Doctor DID NOT Registere!"));
		}
		
		System.out.println(":::::::::::::::::::::: DOC IS NOT NULL!!!");
		System.out.println(":::::::::::::::::::::: " + doc.get().toString());
		return ResponseEntity.ok(new MessageResponse("Doctor registered successfully!"));
		
	}
	
	/**
	 * Patient Inscription
	 * @param signUpRequest
	 * @return MessageResponse
	 */
	@PostMapping("/patient/signup") //TODO add throw  Exception
	@ApiOperation(value = "Inscrire un patient", response = MessageResponse.class)
	public ResponseEntity<MessageResponse> registerPatient(@Valid @RequestBody SignupRequest signUpRequest) {
		System.out.println("username : " + signUpRequest.getUsername());
		System.out.println("lastname : " + signUpRequest.getLastname());
		System.out.println("firstname : " + signUpRequest.getFirstname());
		System.out.println("email : " + signUpRequest.getEmail());
		System.out.println("password : " + signUpRequest.getPassword());
		System.out.println("phone : " + signUpRequest.getPhone());

		if (patientService.existsByUsername(signUpRequest.getUsername())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Username is already taken!"));
		}

		if (patientService.existsByEmail(signUpRequest.getEmail())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Email is already in use!"));
		}

		// Create new user's account
		Patient user = new Patient();
		user.setUsername(signUpRequest.getUsername());
		user.setLastname(signUpRequest.getLastname());
		user.setFirstname(signUpRequest.getFirstname());
		user.setEmail( signUpRequest.getEmail());
		user.setPhone( signUpRequest.getPhone());
		user.setPassword(encoder.encode(signUpRequest.getPassword()));

		Set<Role> roles = new HashSet<>();
		Role userRole = roleService.findByName(ERole.ROLE_USER)
				.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
		Role patientRole = roleService.findByName(ERole.ROLE_PATIENT)
				.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
		roles.add(userRole);
		roles.add(patientRole);
		user.setRoles(roles);
		Optional<Patient> pat = patientService.insertPatient(user);
		if(!pat.isPresent()) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Patient DID NOT Registere!"));
		}
		System.out.println(":::::::::::::::::::::: PATIENT IS NOT NULL!!!");
		System.out.println(":::::::::::::::::::::: " + pat.get().toString());
		return ResponseEntity.ok(new MessageResponse("Patient registered successfully!"));
	}
	
	/**
	 * Admin Inscription 
	 * @param signUpRequest
	 * @return MessageResponse
	 */
	@PostMapping("/admin/signup") //TODO add throw  Exception
	@ApiOperation(value = "Inscrire un admin", response = MessageResponse.class)
	public ResponseEntity<MessageResponse> registerAdmin(@Valid @RequestBody SignupRequest signUpRequest) {
		System.out.println("username : " + signUpRequest.getUsername());
		System.out.println("lastname : " + signUpRequest.getLastname());
		System.out.println("firstname : " + signUpRequest.getFirstname());
		System.out.println("email : " + signUpRequest.getEmail());
		System.out.println("password : " + signUpRequest.getPassword());
		System.out.println("phone : " + signUpRequest.getPhone());

		if (adminService.existsByUsername(signUpRequest.getUsername())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Username is already taken!"));
		}

		if (adminService.existsByEmail(signUpRequest.getEmail())) {
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Error: Email is already in use!"));
		}

		// Create new user's account
		Admin user = new Admin();
		user.setUsername(signUpRequest.getUsername());
		user.setLastname(signUpRequest.getLastname());
		user.setFirstname(signUpRequest.getFirstname());
		user.setEmail( signUpRequest.getEmail());
		user.setPassword(encoder.encode(signUpRequest.getPassword()));

		Set<Role> roles = new HashSet<>();
		Role adminRole = roleService.findByName(ERole.ROLE_ADMIN)
				.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
		Role userRole = roleService.findByName(ERole.ROLE_USER)
				.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
		roles.add(adminRole);
		roles.add(userRole);
		user.setRoles(roles);
		Optional<Admin> emp = adminService.save(user);
		if(!emp.isPresent()) {
			System.out.println(":::::::::::::::::::::: ADMIN IS NULL!!!");
			return ResponseEntity
					.badRequest()
					.body(new MessageResponse("Admin DID NOT Registere!"));
			
		}

		System.out.println(":::::::::::::::::::::: ADMIN IS NOT NULL!!!");
		System.out.println(":::::::::::::::::::::: " + emp.get().toString());
		return ResponseEntity.ok(new MessageResponse("Admin registered successfully!"));
	}
	
	
	/**
	 * récupérer utilisateur authentifié 
	 * @return JwtResponse
	 */
	@GetMapping("/user")
	@ApiOperation(value = "recupirer utilisateur authentifié", response = JwtResponse.class)
    public ResponseEntity<?> getAuthenticatedUser(){
		
		
		try {
			Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
			String jwt = jwtUtils.generateJwtToken(authentication);
			UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();		
			List<String> roles = userDetails.getAuthorities().stream()
					.map(item -> item.getAuthority())
					.collect(Collectors.toList());

			return ResponseEntity.ok(new JwtResponse(jwt, 
													 userDetails.getId(), 
													 userDetails.getUsername(), 
													 userDetails.getEmail(), 
													 userDetails.getUserType(),
													 roles));
		}catch (Exception ex) {
			ex.printStackTrace();
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(new MessageResponse("bad credentials"));
		}
		

    }
	
	
}
