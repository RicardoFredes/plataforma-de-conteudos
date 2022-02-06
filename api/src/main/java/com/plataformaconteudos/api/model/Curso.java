package com.plataformaconteudos.api.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
@Data
public class Curso implements Serializable {

    @Id
    private Long id;

}
