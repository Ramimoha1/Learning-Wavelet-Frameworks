package com.example.demo.controller;

import com.example.demo.service.PhotoService;
import com.example.demo.model.Photo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;
import java.util.*;


@RestController
public class PhotoController {

    private final PhotoService photoService;

    PhotoController(@Autowired PhotoService photoService) {
        this.photoService = photoService;
        byte[] abate = new byte[0];
        photoService.save("rami" , "jpj" , abate);
    }


    @GetMapping("/photos")
    public Collection<Photo> get() {
        return photoService.values();
    }

    @GetMapping("/photos/{id}")
    public Photo get(@PathVariable String id) {
        Photo photo = photoService.get(id);
        if (photo == null) throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        return photo;
    }

    @DeleteMapping("/photos/{id}")
    public void delete(@PathVariable String id) throws Exception {
        photoService.remove(id);
    }
    @PostMapping(   "/photos")
    public void create(@RequestPart("data") MultipartFile file) throws IOException {
        Photo photo = photoService.save(file.getOriginalFilename(), file.getContentType() ,file.getBytes());
    }
}


