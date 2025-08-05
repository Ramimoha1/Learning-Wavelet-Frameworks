package com.example.demo.Student;

import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Service
public class StudentService {
    public List<Student> getStudents() {
        return  List.of(new Student(1L,"Rami" , "eng.ramimoha@gmail.com" , LocalDate.of(2005, Month.APRIL,26) , 20
        ));
    }
}
