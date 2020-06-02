package com.telemed.rest.config;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.index.TextIndexDefinition;
import org.springframework.data.mongodb.core.index.TextIndexDefinition.TextIndexDefinitionBuilder;

@Configuration
public class MongoConfig {

    @Autowired
    private MongoTemplate mongoTemplate;
    @Autowired

    @PostConstruct
    public void initIndexes() {
    	
    	mongoTemplate.indexOps("doctors").dropAllIndexes();
    	
    	TextIndexDefinition  textIndex = new TextIndexDefinitionBuilder()
    			.onField("clinic.name")
    			.onField("lastname")
    			.onField("firstname")
    			.onField("speciality")
    			.build();
    	mongoTemplate.indexOps("doctors")
        .ensureIndex(textIndex);
    }
}
