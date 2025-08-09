package com.example.demo.service;

import com.example.demo.model.Photo;
import com.example.demo.repository.PhotoRepository;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class PhotoService  {

    private final PhotoRepository photoRepository;

    PhotoService (PhotoRepository photoRepository) {
        this.photoRepository = photoRepository;
    }
    public List<Photo> values() {
        return photoRepository.getAllPhotos();
    }

    public Photo get(String id) {
        UUID uuid = UUID.fromString(id);
        return photoRepository.getByID(uuid);
    }

    public void remove(String id) throws Exception {
        UUID uuid = UUID.fromString(id);
        photoRepository.deletePhoto(uuid);
    }

    public Photo save(String fileName , String contentType, byte[] data) {
        photoRepository.insertPhoto( fileName , contentType,  data);
        return null;
    }
}
