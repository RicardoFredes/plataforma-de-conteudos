package com.plataformaconteudos.api.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.plataformaconteudos.api.entity.enumerations.TypeCourse;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Data
@NoArgsConstructor
@Entity
public class ListDocument implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    @Column(nullable = false)
    private TypeCourse type;
    @Column(nullable = false)
    private String title;

    @OneToMany(mappedBy = "listDocument", cascade = CascadeType.ALL)
    @JsonProperty("image")
    private List<Image> images;

    @OneToMany(mappedBy = "listDocument", cascade = CascadeType.ALL)
    private List<Aswers> aswers;

    @OneToMany(mappedBy = "listDocument", cascade = CascadeType.ALL)
    @JsonProperty("correction")
    private List<Correction> corrections;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.ALL)
    private Document document;

    private String url;
    private String ratio;
    private String provider;
    private Long durationInMs;

}
