package com.setmygoal.backend.controller;

import com.setmygoal.backend.dto.DashboardResponse;
import com.setmygoal.backend.model.StudentProfile;
import com.setmygoal.backend.repository.StudentProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/dashboard")
@CrossOrigin(origins = "*")
public class DashboardController {

    @Autowired
    private StudentProfileRepository profileRepository;

    @GetMapping("/{userId}")
    public DashboardResponse getDashboard(@PathVariable String userId) {

        StudentProfile profile = profileRepository.findByUserId(userId)
                .orElseThrow(() -> new RuntimeException("Profile not found"));

        // Decision logic
        if ("10TH".equals(profile.getEducationLevel())) {

            return new DashboardResponse(
                "Class 10 Career Guidance",
                "Choose the right stream based on interest and ability",
                List.of(
                    "Science vs Commerce vs Arts",
                    "Pros & Cons of each stream",
                    "Career scope after 10th",
                    "Stream selection quiz"
                )
            );
        }

        if ("12TH".equals(profile.getEducationLevel())) {

            return new DashboardResponse(
                "Class 12 Career Planning",
                "Explore careers and exams after 12th",
                List.of(
                    "Career options by stream",
                    "Competitive exams roadmap",
                    "College selection guide",
                    "Skill development tips"
                )
            );
        }

        return new DashboardResponse(
            "Career Guidance",
            "Personalized guidance based on your profile",
            List.of("Explore careers", "Skill roadmap")
        );
    }
}
