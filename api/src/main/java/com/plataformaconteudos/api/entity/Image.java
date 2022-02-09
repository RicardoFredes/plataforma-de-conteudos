package com.plataformaconteudos.api.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@Entity
public class Image implements Serializable {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;
    private String title;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.ALL)
    private Document document;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.ALL)
    private ListDocument listDocument;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.ALL)
    private Correction correction;

    @OneToMany(mappedBy = "image", cascade = CascadeType.ALL)
    @JsonProperty("list")
    private List<ListImage> listImages = new ArrayList<>();

}
