package com.setmygoal.backend.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "student_profiles")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class StudentProfile {

    @Id
    private String id;

    private String userId;

    private String educationLevel;
    private String currentClass;
    private String board;
    private String stream;

    private List<String> interests;
    private String goal;
}
