package com.tuneup.backend.payload.request;

import com.tuneup.backend.model.Song;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SongRequest {
    private String imagePath = null;
    private String title;
    private String artist;
    private Integer bpm;
    private String key;
    private String textAndChords;
    private String videoLessonUrl;

    public Song toEntity(String tabFilePath) {
        return new Song(null, title, artist, tabFilePath, textAndChords, key, bpm, videoLessonUrl );
    }
}
