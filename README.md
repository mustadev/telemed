# TeleMed
Visit your Doctor ONLINE.

## FEATURES
1. VIDEO CALL between a Doctor and a Patient.
2. SEARCH for Doctor based on there name, Clinic name, there Location
3. Make an Appointment.
4. Rate and Write a Review about a Doctor.
5. Upload Profile Image and Clinic Images.
6. Clinic Location on Google Map.



## Build Telemed

### Build Java Package

```bash
cd telemed
mvn -Dmaven-test-skip package
```
### Build Docker

```bash
docker build -t telemed .
```
### Run Docker 

```bash
docker-compose up
```
