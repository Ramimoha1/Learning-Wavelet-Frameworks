package com.example.demo.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.jdbi.v3.core.mapper.reflect.ColumnName;

import java.util.UUID;

public class Photo {
    @ColumnName("id")
    private UUID id;
    @ColumnName("filename")
    private String fileName;
    @ColumnName("content_type")
    private String contentType;

    @JsonIgnore
    @ColumnName("data")
    private byte[] data;

    public Photo(UUID id, String fileName) {
        this.id = id;
        this.fileName = fileName;
    }

    public Photo(UUID id, String fileName, String contentType, byte[] data) {
        this.id = id;
        this.fileName = fileName;
        this.contentType = contentType;
        this.data = data;
    }

    public String getContentType() {
        return contentType;
    }

    public void setContentType(String contentType) {
        this.contentType = contentType;
    }

    public Photo() {
    }

    public UUID getId() {
        return id;
    }

    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }


    public void setId(UUID id) {
        this.id = id;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }
}

