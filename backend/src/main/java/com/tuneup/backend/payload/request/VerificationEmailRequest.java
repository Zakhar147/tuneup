package com.tuneup.backend.payload.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class VerificationEmailRequest {
    private String email;
    private String verificationCode;

    @Override
    public String toString() {
        return "VerificationEmailRequest{" +
                "email='" + email + '\'' +
                ", verificationCode='" + verificationCode + '\'' +
                '}';
    }
}
