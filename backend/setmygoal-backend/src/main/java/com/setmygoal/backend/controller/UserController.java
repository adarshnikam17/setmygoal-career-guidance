package com.setmygoal.backend.controller;

import com.setmygoal.backend.model.User;
import com.setmygoal.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    // REGISTER USER
    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        user.setProfileCompleted(false);
        user.setRole("STUDENT");
        return userRepository.save(user);
    }
}
