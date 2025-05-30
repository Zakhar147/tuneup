package com.tuneup.backend.payload.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmailRequest {
    private String email;

    @Override
    public String toString() {
        return "EmailRequest{" +
                "email='" + email + '\'' +
                '}';
    }
}
