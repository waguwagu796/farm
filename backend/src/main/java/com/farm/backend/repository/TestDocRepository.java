package com.farm.backend.repository;

import com.farm.backend.domain.TestDoc;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TestDocRepository extends MongoRepository<TestDoc, String> {
}
