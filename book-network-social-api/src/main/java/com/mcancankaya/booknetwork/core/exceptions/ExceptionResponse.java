package com.mcancankaya.booknetwork.core.exceptions;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Data;

import java.util.Map;
import java.util.Set;

@Data
@Builder
@JsonInclude(JsonInclude.Include.NON_EMPTY)
public class ExceptionResponse {
    private Integer businessErrorCode;
    private String businessExceptionDescription;
    private String error;
    private Set<String> validationErrors;
    private Map<String, String> errors;
}
