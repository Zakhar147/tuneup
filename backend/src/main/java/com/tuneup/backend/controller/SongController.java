package com.tuneup.backend.controller;

import com.tuneup.backend.model.Song;
import com.tuneup.backend.payload.request.SongRequest;
import com.tuneup.backend.service.FileStoreService;
import com.tuneup.backend.service.SongService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.UrlResource;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.core.io.Resource;


import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/songs")
@RequiredArgsConstructor
@CrossOrigin
public class SongController {

    private final SongService songService; // Service for managing songs
    private final FileStoreService fileStoreService; // Service for storing uploaded files

    // Endpoint to receive and save a new song with an uploaded file
    @PostMapping
    public ResponseEntity<String> receiveSong(@ModelAttribute SongRequest songRequest, @RequestParam("file") MultipartFile file) {
        try {
            String publicPath = fileStoreService.storeFile(file); // Save the uploaded file and get its path
            Song song = songRequest.toEntity(publicPath); // Convert request to entity with file path
            songService.saveSong(song); // Save song to DB
            return ResponseEntity.ok("Song received and saved");
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to save the song");
        }
    }

    // Get all songs without pagination
    @GetMapping
    public List<Song> geAllSongs() {
        return songService.getAllSongs();
    }

    // Get paged list of songs
    @GetMapping("/paged")
    public Page<Song> getPagedSongs(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size) {
        return songService.getPagedSongs(page, size);
    }

    // Get a single song by its ID
    @GetMapping("/{id}")
    public ResponseEntity<Song> getSongById(@PathVariable Long id) {
        Optional<Song> song = songService.getSongById(id);
        return song.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Download tab file for the song by ID
    @GetMapping("/{id}/tab")
    public ResponseEntity<Resource> serveTab(@PathVariable Long id) throws MalformedURLException {
        Optional<Song> songOptional = songService.findById(id);

        if (songOptional.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Song song = songOptional.get();
        String pathString = song.getTabFilePath();
        Path filePath = Paths.get(pathString);
        Resource file = new UrlResource(filePath.toUri());

        if (!file.exists()) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"")
                .body(file);
    }

    // Delete a song by its ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSong(@PathVariable Long id) {
        songService.deleteSong(id);
        return ResponseEntity.noContent().build();
    }

    // Generate multiple sample songs with static data
    @PostMapping("/generate")
    public ResponseEntity<String> generateSongs() {
        String testTabFilePath = "tabs/test-tab.gp"; // Path to sample tab file
        String defaultTextAndChords = """
        [Intro]
        C     G       Am      F
        Починається шалений біт
        ...
        """.trim();

        Integer bpm = 120;
        String key = "A";
        String lesson = "https://www.youtube.com/watch?v=0yxYsElpmFE&list=RDMM0yxYsElpmFE&start_radio=1";

        List<String[]> officialSongs = List.of(
                new String[]{"Олександр Верес", "Дорога додому"},
                new String[]{"Анна Ладан", "Світло у ночі"},
                new String[]{"Гурт Horizon", "Твій шлях"},
                new String[]{"Марія Світанкова", "Крила надії"},
                new String[]{"Євген Коваль", "Мелодія серця"},
                new String[]{"Катерина Зоряна", "Знову йду"},
                new String[]{"Артем Мельник", "Небо і земля"},
                new String[]{"Софія Рай", "Літній дощ"},
                new String[]{"Гурт Відлуння", "Пульс міста"},
                new String[]{"Ірина Вітряна", "Без слів"},
                new String[]{"Данило Шлях", "Нічне місто"},
                new String[]{"Олеся Мирна", "Промінь"},
                new String[]{"Гурт Ранок", "Серед тиші"},
                new String[]{"Іван Кордоба", "Твої сліди"},
                new String[]{"Аліна Синєва", "Де ти"},
                new String[]{"Максим Листопад", "Осінній вітер"},
                new String[]{"Олена Біла", "Глибина"},
                new String[]{"Гурт Простір", "Мить"},
                new String[]{"Віктор Синиця", "Мандрівник"},
                new String[]{"Лідія Квіткова", "Теплий сніг"},
                new String[]{"Олексій Тихий", "Спокій"},
                new String[]{"Дарина Ластівка", "Поруч"},
                new String[]{"Гурт Шляхетність", "Відчуй"},
                new String[]{"Роман Журавель", "Дороги"},
                new String[]{"Ганна Світла", "Дихає любов"},
                new String[]{"Юрій Гордій", "Непорушний"},
                new String[]{"Марина Лагідна", "Пісня для тебе"}
        );

        // Create and save each song
        for (String[] entry : officialSongs) {
            String artist = entry[0];
            String title = entry[1];
            Song song = new Song(null, title, artist, testTabFilePath, defaultTextAndChords, key, bpm, lesson);
            songService.saveSong(song);
        }

        return ResponseEntity.ok(officialSongs.size() + " officialSongs songs created.");
    }
}