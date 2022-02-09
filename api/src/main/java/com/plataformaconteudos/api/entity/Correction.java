package com.plataformaconteudos.api.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Data
@NoArgsConstructor
@Entity
public class Correction implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    private String text;
    private String alternative;

    @OneToMany(mappedBy = "correction", cascade = CascadeType.ALL)
    @JsonProperty("video")
    private List<Video> videos;

    @OneToMany(mappedBy = "correction", cascade = CascadeType.ALL)
    @JsonProperty("image")
    private List<Image> images;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.ALL)
    private ListDocument listDocument;
}
