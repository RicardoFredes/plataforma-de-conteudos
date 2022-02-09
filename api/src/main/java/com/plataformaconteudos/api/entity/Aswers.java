package com.plataformaconteudos.api.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Data
@NoArgsConstructor
@Entity
public class Aswers implements Serializable {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    private String text;
    private String alternative;
    private Boolean isCorrect;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.ALL)
    private ListDocument listDocument;
}
