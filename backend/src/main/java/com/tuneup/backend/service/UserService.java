package com.tuneup.backend.service;

import com.tuneup.backend.model.Users;
import com.tuneup.backend.repo.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepo userRepo;

    private final AuthenticationManager authenticationManager;

    public List<Users> getAllUsers() {
        return userRepo.findAll();
    }

}
