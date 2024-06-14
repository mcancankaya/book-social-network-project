package com.mcancankaya.booknetwork.services;

import com.mcancankaya.booknetwork.entities.user.Token;
import com.mcancankaya.booknetwork.entities.user.User;
import com.mcancankaya.booknetwork.repositories.RoleRepository;
import com.mcancankaya.booknetwork.repositories.TokenRepository;
import com.mcancankaya.booknetwork.repositories.UserRepository;
import com.mcancankaya.booknetwork.services.dtos.auth.RegistrationRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final TokenRepository tokenRepository;

    public void register(RegistrationRequest request) {
        //TODO : register implementation
        var userRole = roleRepository.findByName("USER")
                //TODO : EXCEPTION HANDLING
                .orElseThrow(() -> new IllegalStateException("ROLE USER was not initialized"));
        var user = User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .accountLocked(false)
                .enabled(false)
                .roles(List.of(userRole))
                .build();
        userRepository.save(user);
        sendValidationEmail(user);
        //TODO : save user to database

    }

    private void sendValidationEmail(User user) {
        var newToken = generateAndSaveActivationToken(user);
        // TODO : SEND EMAİL
    }

    private String generateAndSaveActivationToken(User user) {
        // Generate the activation token
        String generatedToken = generateActivationCode(6);
        var token = Token.builder()
                .token(generatedToken)
                .createdAt(LocalDateTime.now())
                .expiresAt(LocalDateTime.now().plusMinutes(10))
                .user(user)
                .build();
        // TODO : save token to database
        tokenRepository.save(token);
        return "";
    }

    private String generateActivationCode(int length) {
        String characters = "012345689";
        StringBuilder codeBuilder = new StringBuilder();
        SecureRandom secureRandom = new SecureRandom();
        for (int i = 0; i < length; i++) {
            int randomIndex = secureRandom.nextInt(characters.length());
            codeBuilder.append(characters.charAt(randomIndex));
        }
        return codeBuilder.toString();
    }
}
