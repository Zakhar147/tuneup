package com.tuneup.backend.model;

import jakarta.persistence.*;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Data
@Getter
@Table(name = "songs")
@NoArgsConstructor
public class Song {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "image_path")
    private String imgPath;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String artist;

    @Column(nullable = false)
    private Integer bpm;

    @Column(name = "song_key", nullable = false)
    private String key;

    @Column(name = "tab_file_path")
    private String tabFilePath;

    @Lob
    @Column(name = "text_and_chords", columnDefinition = "TEXT")
    private String textAndChords;

    @Column(name = "video_lesson_url")
    private String videoLessonUrl;

    public Song(String imagePath, String title, String artist, String tabFilePath, String textAndChords, String key, Integer bpm, String videoLessonUrl) {
        this.imgPath = imagePath;
        this.title = title;
        this.artist = artist;
        this.tabFilePath = tabFilePath;
        this.textAndChords = textAndChords;
        this.key = key;
        this.bpm = bpm;
        this.videoLessonUrl = videoLessonUrl;
    }

}

