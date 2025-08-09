package com.example.demo.repository;

import com.example.demo.model.Photo;
import org.jdbi.v3.sqlobject.config.RegisterBeanMapper;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.UUID;
@Repository
@RegisterBeanMapper(Photo.class)
public interface PhotoRepository {
    @SqlUpdate("INSERT INTO photo (filename,content_type ,data) VALUES(:filename, :content_type, :data)")
    void insertPhoto(String filename, String content_type, byte[] data);
    @SqlUpdate("Delete From photo Where id = :id")
    void deletePhoto(UUID id) throws Exception;
    @SqlQuery("Select * From photo ")
    List<Photo> getAllPhotos() ;

    @SqlQuery("Select * From photo Where id = :id ")
    Photo getByID(UUID id);
}
