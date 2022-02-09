package com.plataformaconteudos.api.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Data
@NoArgsConstructor
@Entity
public class ListImage implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String size;
    private String url;
    private Long height;
    private Long width;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.ALL)
    private Image image;

}
