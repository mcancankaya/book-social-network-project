package com.mcancankaya.booknetwork.controllers;

import com.mcancankaya.booknetwork.services.AuthenticationService;
import com.mcancankaya.booknetwork.services.dtos.auth.AuthenticationRequest;
import com.mcancankaya.booknetwork.services.dtos.auth.AuthenticationResponse;
import com.mcancankaya.booknetwork.services.dtos.auth.RegistrationRequest;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.mail.MessagingException;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("auth")
@RequiredArgsConstructor
@Tag(name = "Authentication")
public class AuthenticationController {
    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public ResponseEntity<?> register(
            @RequestBody @Valid RegistrationRequest request
    ) throws MessagingException {
        authenticationService.register(request);
        return ResponseEntity.accepted().build();
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(
            @RequestBody @Valid AuthenticationRequest request
    ) {
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }

    @GetMapping("/activate-account")
    public void confirm(@RequestParam String token) throws MessagingException {
        authenticationService.activateAccount(token);
    }
}
