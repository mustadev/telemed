package com.mustadev.telemed.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;


/**
 * Class de configuration de Rest Docomentation.
 * @author Mustapha De BrainStormers
 * @since 13-03-2020
 * 
 */

@Configuration
@EnableSwagger2
public class RestDocConfig {

    /**
     * un Builder utiliser par Swagger pour generer les Documentation
     * @return Docket
     */
    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2).select()
            .apis(RequestHandlerSelectors
            .basePackage("com.mustadev.telemed.controllers"))
            .paths(PathSelectors.regex("/.*"))
            .build().apiInfo(apiEndPointsInfo());
    }

    /**
     * @return Rest Api information.
     */
    private ApiInfo apiEndPointsInfo() {

        return new ApiInfoBuilder()
        	.title("TeleMed REST API")
            .description("TeleMed Projet Rest API ")
            .contact(new Contact("Mustapha Ouarrain","github.com/mustadev", "ouarrain.mustapha@gmail.com"))
            .license("BrainStormers 1.0")
            .licenseUrl("http://www.brainstromers.com/licenses/LICENSE-2.0.html")
            .version("1.0.0")
            .build();
    }

}
