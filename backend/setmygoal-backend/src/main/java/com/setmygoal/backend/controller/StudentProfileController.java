package com.setmygoal.backend.controller;

import com.setmygoal.backend.model.StudentProfile;
import com.setmygoal.backend.repository.StudentProfileRepository;
import com.setmygoal.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/profile")
@CrossOrigin(origins = "*")
public class StudentProfileController {

    @Autowired
    private StudentProfileRepository profileRepository;

    @Autowired
    private UserRepository userRepository;

    // CREATE or UPDATE PROFILE
    @PostMapping("/save/{userId}")
    public StudentProfile saveProfile(
            @PathVariable String userId,
            @RequestBody StudentProfile profile) {

        profile.setUserId(userId);

        // Mark profile as completed
        userRepository.findById(userId).ifPresent(user -> {
            user.setProfileCompleted(true);
            userRepository.save(user);
        });

        return profileRepository.save(profile);
    }
}
