package com.plataformaconteudos.api.repository;

import com.plataformaconteudos.api.entity.Document;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends JpaRepository<Document, Long> {
}
