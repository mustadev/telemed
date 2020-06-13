package com.mustadev.telemed.controllers;

import java.io.IOException;
import java.util.List;
import java.util.Set;

import javax.validation.Valid;

import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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

import com.mustadev.telemed.exceptions.ResourceAlreadyExistsException;
import com.mustadev.telemed.exceptions.ResourceNotFoundException;
import com.mustadev.telemed.models.Clinic;
import com.mustadev.telemed.models.Doctor;
import com.mustadev.telemed.models.Like;
import com.mustadev.telemed.models.Photo;
import com.mustadev.telemed.models.Review;
import com.mustadev.telemed.payload.request.Password;
import com.mustadev.telemed.payload.response.MessageResponse;
import com.mustadev.telemed.services.DoctorService;
import com.mustadev.telemed.services.PhotoService;
import com.mustadev.telemed.services.ReviewService;

import ch.qos.logback.classic.Logger;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

/**
 * @author Mustapha Ouarrain
 * @since version 0.0.1
 * 
 */
@RestController
@RequestMapping("doctors")
@Api(tags = "Doctor Controlleur", value="Doctors Management System")
@CrossOrigin(origins="*", maxAge=3600) //TODO Mustapha change this for security reasons
public class DoctorController {


	private final static Logger logger = (Logger) LoggerFactory.getLogger(DoctorController.class);

	@Autowired
	private DoctorService doctorService;

	@Autowired
	private PhotoService photoService;
	
	@Autowired
	private ReviewService reviewService;
	
	@Autowired
	private PasswordEncoder encoder;


	/**
	 * obtenir tous les doctors
	 * @return List<Doctor> 
	 * @throws ResourceNotFoundException
	 */
	@ApiOperation(value = "obtenir tous les doctors", response = List.class)
	@GetMapping(produces = "application/json")
	public ResponseEntity<List<Doctor>> getAllDoctors(
			@ApiParam(name ="query", value="requête de recherche") 
			@RequestParam(name = "query", defaultValue = "", required = false) String query,
			@ApiParam(name = "city", value="limiter la recherche pour cette ville") 
			@RequestParam(name = "city",defaultValue="", required=false) String city,
			@ApiParam(name ="sort", value="trier le résultat par rating et reviews", defaultValue="rating", allowableValues="rating, reviews") 
			@RequestParam(name = "sort", defaultValue= "rating", required=false) String sort)
					throws ResourceNotFoundException {
		//see https://hackernoon.com/telemedful-api-designing-guidelines-the-best-practices-60e1d954e7c9
		logger.info("getAllDoctors::: params :  query: " + query + " sort: " + sort +  " city " + city);
		if (query.isEmpty() && city.isEmpty()) {
			List<Doctor> results = doctorService
					.findAll(Sort.by(sort).descending())
					.orElseThrow(() -> new ResourceNotFoundException("No Doctors Found"));
			return new ResponseEntity<>(results, HttpStatus.OK);

		}else if (query.isEmpty()) {
			System.out.println("query");
			List<Doctor> results = doctorService
					.searchByCity(city, Sort.by(sort).descending())
					.orElseThrow(() -> new ResourceNotFoundException("No Doctors Found"));
			return new ResponseEntity<>(results, HttpStatus.OK);
		}

		List<Doctor> results = doctorService
				.search(query, city, Sort.by(sort).descending())
				.orElseThrow(() -> new ResourceNotFoundException("No Doctors Found"));
		return new ResponseEntity<>(results, HttpStatus.OK);

	}


	/**
	 * trouver un doctor par son id
	 * @param id
	 * @return {@link ResponseEntity}
	 * @throws {@link ResourceNotFoundException}
	 */
	@ApiOperation(value = "trouver un doctor par son id", response = Doctor.class)
	@GetMapping(value = "/{id}", produces = "application/json")
	public ResponseEntity<Doctor> getDoctorById(@PathVariable("id") String id) throws ResourceNotFoundException {
		System.out.println("get doctor with id : " + id);
		Doctor result =  doctorService.findById(id)
				.orElseThrow(()-> {
					return new ResourceNotFoundException("No Doctor with id : " + id );
				});
		return new ResponseEntity<Doctor>(result, HttpStatus.OK);
	}

	/**
	 * trouver un doctor par son nom d'utilisateur
	 * @param username
	 * @return {@link ResponseEntity}
	 * @throws {@link ResourceNotFoundException}
	 */
	@ApiOperation(value = "trouver un doctor par son nom d'utilisateur", response = Doctor.class)
	@GetMapping(value = "/username/{username}", produces = "application/json")
	public ResponseEntity<Doctor> getDoctorByUsername(@PathVariable("username") String username) throws ResourceNotFoundException {
		System.out.println("get doctor with username : " + username);
		Doctor result =  doctorService.findByUsername(username)
				.orElseThrow(()-> {
					return new ResourceNotFoundException("No Doctor with id : " + username );
				});
		return new ResponseEntity<Doctor>(result, HttpStatus.OK);
	}



	/**
	 * ajouter  un Doctor
	 * @param doctor
	 * @return Doctor 
	 */
	@ApiOperation(value = "ajouter un Doctor ", response = Doctor.class, code = 201)
	@PostMapping(consumes = "application/json", produces = "application/json")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<Doctor> createDoctor(
			@ApiParam(value = "Doctor", required = true) @RequestBody  Doctor doctor) throws ResourceAlreadyExistsException{
		Doctor result =  doctorService.save(doctor).
				orElseThrow(() -> new ResourceAlreadyExistsException("could not create " +	doctor.toString()));
		return new ResponseEntity<Doctor>(result, HttpStatus.CREATED);
	}

	/**
	 * modifier un Doctor
	 * @param doctor
	 * @return Doctor
	 */
	@ApiOperation(value = "modifier un Doctor ", response = Doctor.class)
	@PreAuthorize("#doctor.id == principal.id")
	@PutMapping(consumes = "application/json", produces = "application/json")
	public ResponseEntity<Doctor>  updateDoctor(
			@ApiParam(value = "Doctor", required = true) @RequestBody  Doctor doctor) throws ResourceAlreadyExistsException{
		Doctor old = doctorService.findById(doctor.getId())
				.orElseThrow( () -> new ResourceAlreadyExistsException("could not update" +	doctor.toString()));
//		doctor.setEmail(old.getEmail());
//		doctor.setPassword(old.getPassword());
//		doctor.setUsername(old.getUsername());
//		doctor.setRating(old.getRating());
//		doctor.setAverageRating(old.getAverageRating());
//		doctor.setAvatar(old.getAvatar());
		old.setFirstname(doctor.getFirstname());
		old.setLastname(doctor.getLastname());
		old.setSpeciality(doctor.getSpeciality());
		old.setAboutMe(doctor.getAboutMe());
		Doctor result = doctorService.
				save(old).orElseThrow( () -> new ResourceAlreadyExistsException("could not update" +	doctor.toString()));
		return new ResponseEntity<>(result, HttpStatus.OK);

	}


	/**
	 * supprimer un Doctor par son ID
	 * @param id
	 * @return message {@link MessageResponse} 
	 */
	@ApiOperation(value = "supprimer un doctor", response = MessageResponse.class)
	@DeleteMapping(value = "/{id}", produces = "application/json")
	public ResponseEntity<MessageResponse> deleteDoctor(@PathVariable String id) {
		doctorService.deleteById(id);
		//doctorService.deleteDoctor(doctorService.findBy(studentNumber).getId());
		return ResponseEntity.ok().body(new MessageResponse("doctor with ID : " + id + " successfully deleted"));
	}


	/**
	 * Ajouter Image du Doctor
	 * @param photo
	 * @return Photo id
	 */
	@ApiOperation(value = "Ajouter Image du Doctor", response = Photo.class)
	@PostMapping("/{id}/avatar")
	public ResponseEntity<Photo> uploadPhoto(
			@PathVariable("id") String id,
			@RequestParam("avatar") MultipartFile file) throws ResourceNotFoundException, IOException{
		Photo photo = new Photo(); 
		Doctor doctor = doctorService.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Could Find Doctor: " + id));
		photo.setImage(new Binary(BsonBinarySubType.BINARY, file.getBytes()));
		//photo.setOwnerId(id);
		photo = photoService.save(photo)
				.orElseThrow(() -> new ResourceNotFoundException("Could Not Save Photo"));
		
		doctor.setAvatar(photo);
		doctorService.save(doctor);
		return ResponseEntity.status(HttpStatus.OK).body(photo);
	}
	
	

	/**
	 * Trouver Image du Doctor
	 * @param photo
	 * @return Photo Base64 Encoded
	 */
	@ApiOperation(value = "Trouver Image du Doctor", response = Photo.class)
	@GetMapping("/{id}/avatar")
	public ResponseEntity<Photo> getAvatar(@PathVariable("id") String id) throws ResourceNotFoundException {
		Photo photo = doctorService
				.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("could not find photo with id"))
				.getAvatar();
		return ResponseEntity.ok().body(photo);
	}

	/**
	 * Update Image du Doctor
	 * @param photoId 
	 * @param file
	 * @return Photo Base64 Encoded 
	 */
	@ApiOperation(value = "Update Image du Doctor", response = Photo.class)
	@PutMapping("/{id}/avatar")
	public ResponseEntity<Photo> getUpdatePhoto(@PathVariable("id") String id,
			@RequestParam("photo") MultipartFile file) throws ResourceNotFoundException, IOException {
		Doctor doctor = doctorService
				.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("could not find photo with id"));
		Photo photo = new Photo();
		photo.setImage(new Binary(BsonBinarySubType.BINARY, file.getBytes()));
		doctor.setAvatar(photoService.save(photo)
				.orElseThrow(()-> new ResourceNotFoundException("could not save photo with id")));
		doctorService.save(doctor);
		
		return ResponseEntity.status(HttpStatus.OK).body(photo);

	}
	
	/**
	 * Ajouter Clinic du Doctor
	 * @param Clinic
	 * @return {@link Clinic}
	 */
	@ApiOperation(value = "Ajouter Clinic du Doctor", response = Clinic.class)
	@PostMapping("/{id}/clinic")
	public ResponseEntity<Clinic> addClinic(
			@PathVariable("id") String id,
			@RequestBody @Valid Clinic clinic) throws ResourceNotFoundException{
	
		Doctor doctor = doctorService.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Could Find Doctor: " + id));
		Clinic old = doctor.getClinic();
		clinic.setPhotos(old.getPhotos());
		doctor.setClinic(clinic);
		
		doctorService.save(doctor);
		return ResponseEntity.status(HttpStatus.OK).body(clinic);
	}
	
	

	/**
	 * Trouver Clinic du Doctor
	 * @param photo
	 * @return Photo Base64 Encoded
	 */
	@ApiOperation(value = "Trouver Clinic du Doctor", response = Clinic.class)
	@GetMapping("/{id}/clinic")
	public ResponseEntity<Clinic> getClinic(@PathVariable("id") String id) throws ResourceNotFoundException {
		Clinic clinic = doctorService
				.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("could not find photo with id"))
				.getClinic();
		return ResponseEntity.ok().body(clinic);
	}

	/**
	 * Update Clinic du Doctor
	 * @param photoId 
	 * @param Clinic
	 * @return Clinic 
	 */
	@ApiOperation(value = "Update Clinic du Doctor", response = Clinic.class)
	@PutMapping("/{id}/clinic")
	public ResponseEntity<Clinic> updateClinic(
			@PathVariable("id") String id,
			@RequestBody @Valid Clinic clinic) throws ResourceNotFoundException, IOException {
		Doctor doctor = doctorService
				.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("could not find photo with id"));
		Clinic old = doctor.getClinic();
		clinic.setPhotos(old.getPhotos());
		doctor.setClinic(clinic);
		doctorService.save(doctor);
		return ResponseEntity.ok().body(clinic);

	}
	
	/**
	 * Ajouter Image du Clinique
	 * @param photo
	 * @return Photo id
	 */
	@ApiOperation(value = "Ajouter Image du Doctor", response = Photo.class)
	@PostMapping("/{id}/clinic/photos")
	public ResponseEntity<Photo> addPhoto(
			@PathVariable("id") String id,
			@RequestParam("photo") MultipartFile file) throws ResourceNotFoundException, IOException{
		Photo photo = new Photo(); 
		Doctor doctor = doctorService.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Could Find Doctor: " + id));
		photo.setImage(new Binary(BsonBinarySubType.BINARY, file.getBytes()));
		photo = photoService.save(photo)
				.orElseThrow(() -> new ResourceNotFoundException("Could Not Save Photo"));
		
		List<Photo> photos = doctor.getClinic().getPhotos();
		photos.add(photo);
		doctor.getClinic().setPhotos(photos);
		doctorService.save(doctor);
		return ResponseEntity.status(HttpStatus.OK).body(photo);
	}
	
	/**
	 * Trouver les Images  du Clinique
	 * @param photo
	 * @return Photos
	 */
	@ApiOperation(value = "Trouver Image du Cliniques", response = List.class)
	@GetMapping("/{id}/clinic/photos")
	public ResponseEntity<List<Photo>> getPhotos(@PathVariable("id") String id) throws ResourceNotFoundException {
		List<Photo> photos = doctorService
				.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("could not find photo with id"))
				.getClinic()
				.getPhotos();
		return ResponseEntity.ok().body(photos);
	}

	/**
	 * Supprimer Image du Doctor
	 * @param Doctor ID
	 * @param Photo ID 
	 * @return message {@link MessageResponse}
	 */
	@ApiOperation(value = "Update Image du Doctor", response = Photo.class)
	@DeleteMapping("/{id}/clinic/photos/{photoId}")
	public ResponseEntity<MessageResponse> deleteClinicPhoto(
			@PathVariable("id") String id,
			@PathVariable("photoId") String photoId) throws ResourceNotFoundException{
		Doctor doctor = doctorService
				.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("could not find Doctor with id" + id ));
		photoService.deleteById(photoId);
		List<Photo> photos = doctor.getClinic()
				.getPhotos();
		photos.removeIf((Photo photo) -> photo.getId() == photoId);
		doctor.getClinic().setPhotos(photos);
		doctorService.save(doctor).orElseThrow(()-> new ResourceNotFoundException("could not save Doctor with id" + id ));;
		return ResponseEntity.status(HttpStatus.OK).body(new MessageResponse("Photo Deleted"));

	}
	

	/**
	 * Ajouter Revue sur le Doctor
	 * @param {@link Review} review
	 * @return {@link Review review } 
	 */
	@ApiOperation(value = "Ajouter Revue sur le Doctor", response = Review.class)
	@PostMapping("/{id}/reviews")
	public ResponseEntity<Review> addReview(
			@PathVariable("id") String id,
			@RequestBody  @Valid Review review) throws ResourceNotFoundException{
		if (review.getPatientId() == null) {
			System.out.println("::::::::::: review with authorId null");
		}
		Doctor doctor = doctorService.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Could Find Doctor: " + id));
		Set<Review> reviews = doctor.getReviews();
		if (reviews.contains(review)) {
			System.out.println("::::::::::: containes Review author id: " + review.getPatientId());
			return ResponseEntity.unprocessableEntity().body(review);
		}
		review = reviewService.save(review)
				.orElseThrow(() -> new ResourceNotFoundException("Could Not Save Review"));
		
		float newRating = getNewRating(doctor.getRating(), doctor.getAverageRating(),review.getRating() );
		reviews.add(review);
		System.out.println("new Rating is: " + newRating);
		doctor.setReviews(reviews);
		doctor.setRating(newRating);
		doctor.setAverageRating(doctor.getAverageRating() + 1);
		doctorService.save(doctor);
		return ResponseEntity.status(HttpStatus.OK).body(review);
	}
	
	

	/**
	 * Trouver les Revues sur le Doctor
	 * @param {@link Review} review
	 * @return {@link List<Review>  } reviews
	 */
	@ApiOperation(value = "Trouver les Revues sur le Doctor", response = Set.class)
	@GetMapping("/{id}/reviews")
	public ResponseEntity<Set<Review>> getReviews(@PathVariable("id") String id) throws ResourceNotFoundException {
		Set<Review> reviews = doctorService
				.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("Could not find Doctor with ID: " + id))
				.getReviews();
		if(reviews.contains(null)) {
			System.out.println(" ::::::::::: set contains null");
			
			reviews.remove(null);
		}
		return ResponseEntity.ok().body(reviews);
	}

	/**
	 * Update Revue 
	 * @param revue id reviewId 
	 * @param {@link Review} review
	 * @return {@link Review} review
	 */
	@ApiOperation(value = "Update Revue ", response = Review.class)
	@PutMapping("/{id}/reviews/{reviewId}")
	public ResponseEntity<Review> getUpdateReview(
			@PathVariable("id") String id,
			@PathVariable("reviewId") String reviewId,
			@RequestBody @Valid Review review) throws ResourceNotFoundException {
		Doctor doctor = doctorService.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Could Find Doctor: " + id));
		Review oldReview = reviewService.findById(reviewId)
				.orElseThrow(()-> new ResourceNotFoundException("could not find Review with ID: " + reviewId));
		oldReview.setContent(review.getContent());
		Review updatedReview = reviewService.save(oldReview)
			.orElseThrow(() -> new ResourceNotFoundException("could not Update Review  with ID"));
		float oldRating = getOldRating(doctor.getRating(), doctor.getAverageRating(), oldReview.getRating());
		float newRating = getNewRating(oldRating, doctor.getAverageRating() -1 ,review.getRating()); 
		System.out.println("new Rating is: " + newRating);
		doctor.setRating(newRating);
		doctor.setAverageRating(doctor.getAverageRating() - 1);
		reviewService.deleteById(reviewId);
		doctorService.save(doctor);
		return ResponseEntity.status(HttpStatus.OK).body(updatedReview);

	}
	
	/**
	 * Supprimer Revue du Doctor
	 * @param doctorId 
	 * @param reviewId 
	 * @return message {@link MessageResponse}
	 */
	@ApiOperation(value = "Supprimer un Revue", response = MessageResponse.class)
	@DeleteMapping("/{id}/reviews/{reviewId}")
	public ResponseEntity<MessageResponse> deleteReview(
			@PathVariable("id") String id,
			@PathVariable("reviewId") String reviewId) throws ResourceNotFoundException{
		Doctor doctor = doctorService.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Could Find Doctor: " + id));
		Review review = reviewService.findById(reviewId)
				.orElseThrow(() -> new ResourceNotFoundException("could not Update Review  with ID"));
		float rating = getOldRating(doctor.getRating(), doctor.getAverageRating(), review.getRating());
		doctor.setRating(rating);
		System.out.println("new Rating is: " + rating);
		doctor.setAverageRating(doctor.getAverageRating() - 1);
		reviewService.deleteById(reviewId);
		doctorService.save(doctor);
		return ResponseEntity.status(HttpStatus.OK).body(new MessageResponse("Review Deleted"));
	}
	
	/**
	 * ajouter like à un Revue 
	 * @param reviewId 
	 * @param like {@link Like}
	 * @return message {@link MessageResponse}
	 */
	@ApiOperation(value = "Aimer un Revue", response = MessageResponse.class)
	@PostMapping("/reviews/{reviewId}/like")
	public ResponseEntity<MessageResponse> likeReview(
			@PathVariable("reviewId") String reviewId,
			@RequestBody  @Valid Like like ) throws ResourceNotFoundException{
		Review review = reviewService.findById(reviewId)
				.orElseThrow(() -> new ResourceNotFoundException("could not Find Review  with ID: " + reviewId));
		Set<Like> likes = review.getLikes();
		if(!likes.add(like)) {
			return ResponseEntity.badRequest().body(new MessageResponse("Review Already Liked"));
		};
		review.setLikes(likes);
		reviewService.save(review)
			.orElseThrow(() -> new ResourceNotFoundException("could not Save Review  with ID: " + reviewId));
		return ResponseEntity.status(HttpStatus.OK).body(new MessageResponse("Review Liked"));
	}
	/**
	 * supprimer like d'un Revue 
	 * @param reviewId 
	 * @param like {@link Like}
	 * @return message {@link MessageResponse}
	 */
	@ApiOperation(value = "Unlike un Revue", response = MessageResponse.class)
	@PostMapping("/reviews/{reviewId}/unlike")
	public ResponseEntity<MessageResponse> unlikeReview(
			@PathVariable("reviewId") String reviewId,
			@RequestBody @Valid Like like ) throws ResourceNotFoundException{
		Review review = reviewService.findById(reviewId)
				.orElseThrow(() -> new ResourceNotFoundException("could not Find Review  with ID: " + reviewId));
		Set<Like> likes = review.getLikes();
		System.out.println("::::::::: likes length: " + likes.size());
		likes.remove(like);
		System.out.println("::::::::: after remove likes length: " + likes.size());
		review.setLikes(likes);
		reviewService.save(review)
			.orElseThrow(() -> new ResourceNotFoundException("could not Save Review  with ID: " + reviewId));
		return ResponseEntity.status(HttpStatus.OK).body(new MessageResponse("Review Unliked"));
	}
	
	
	private float getNewRating(float oldRating, int averageRating, int reviewRating) {
		return (float) (oldRating * averageRating + reviewRating)/(averageRating + 1);
		
	}
	private float getOldRating(float rating, int averageRating, int oldReviewRating) {
		if (averageRating == 1) {
			return 0.0f;
		}
		return (float) (rating * averageRating - oldReviewRating)/(averageRating - 1);
		
	}
	
	/**
	 * modifier le mot de pass
	 * @param Doctor Id 
	 * @return message {@link MessageResponse}
	 */
	@ApiOperation(value = "modifier le mot de pass", response = MessageResponse.class)
	@PostMapping("/{id}/password")
	public ResponseEntity<MessageResponse> changePassowrd(
			@PathVariable("id") String id,
			@RequestBody @Valid Password password ) throws ResourceNotFoundException{
		Doctor doctor = doctorService.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("could not Find Doctor  with ID: " + id));
		
		//String oldPassword = encoder.encode(password.getOldPassword());
		//String originalPassword = doctor.getPassword();
//		System.out.println(" :::::::::::::oldPassword: "+ oldPassword);
//		System.out.println(":::::::::::::: Original Password: "+ originalPassword);
		if (encoder.matches(password.getOldPassword(), doctor.getPassword())) {
			doctor.setPassword(encoder.encode(password.getNewPassword()));
			doctorService.save(doctor)
			.orElseThrow(() -> new ResourceNotFoundException("could not Save Doctor  with ID: " + id));
			return ResponseEntity.status(HttpStatus.OK).body(new MessageResponse("Password Changed"));
			}
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new MessageResponse("Old Password Is Not Correct"));
			
	}
	
}


