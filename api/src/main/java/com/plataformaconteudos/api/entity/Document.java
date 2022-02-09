package com.plataformaconteudos.api.entity;

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
public class Document implements Serializable {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    private String hash;
    private String type;
    @Column(nullable = false)
    private String title;
    private String slug;
    private String description;

    @OneToMany(mappedBy = "document", cascade = CascadeType.ALL)
    @JsonProperty("image")
    private List<Image> images = new ArrayList<>();

    @OneToMany(mappedBy = "document", cascade = CascadeType.ALL)
    @JsonProperty("list")
    private List<ListDocument> listDocuments = new ArrayList<>();
}
