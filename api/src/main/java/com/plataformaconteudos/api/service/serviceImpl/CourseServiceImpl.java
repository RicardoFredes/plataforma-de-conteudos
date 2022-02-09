package com.plataformaconteudos.api.service.serviceImpl;

import com.plataformaconteudos.api.entity.Document;
import com.plataformaconteudos.api.service.CourseService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class CourseServiceImpl implements CourseService {

    @Override
    public ResponseEntity<?> save(Document document) {
        return null;
    }

    private void validateFields(Document document) {

    }
}
