package com.plataformaconteudos.api.controller;

import com.plataformaconteudos.api.entity.Document;
import com.plataformaconteudos.api.repository.CourseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.HashMap;

@RestController
@RequestMapping(path = "/api")
@RequiredArgsConstructor
@Validated
public class CourseController {

    private final CourseRepository repository;

    @PostMapping(path = "/save")
    @Transactional
    public ResponseEntity<?> save(@RequestBody @Validated Document document) {
        HashMap<String, String> map = new HashMap<>();

        try {
            repository.save(document);
            return ResponseEntity.status(201).body(document);
        } catch (Exception e) {
            map.put("results", e.getMessage());
            return ResponseEntity.badRequest().body(map);
        }
    }

    @GetMapping(path = "/list")
    public ResponseEntity<?> list(Pageable paginacao) {
        Page<Document> documents = repository.findAll(paginacao);
        return ResponseEntity.status(200).body(documents);
    }

}
