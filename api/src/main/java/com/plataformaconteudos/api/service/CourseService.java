package com.plataformaconteudos.api.service;

import com.plataformaconteudos.api.entity.Document;
import org.springframework.http.ResponseEntity;

public interface CourseService {

    ResponseEntity<?> save(Document document);
}
