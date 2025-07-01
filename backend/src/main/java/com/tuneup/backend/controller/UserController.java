package com.tuneup.backend.controller;

import com.tuneup.backend.model.Users;
import com.tuneup.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin
public class UserController {

    private final UserService userService; // Service for handling user-related operations

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    // Endpoint to retrieve all registered users
    @GetMapping
    public List<Users> getAll() {
        return userService.getAllUsers();
    }
}
