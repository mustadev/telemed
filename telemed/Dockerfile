FROM openjdk:8-jdk-alpine
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} telemed.jar
ENTRYPOINT ["java", "-Dspring.profiles.active=prod", "-jar", "/telemed.jar"]