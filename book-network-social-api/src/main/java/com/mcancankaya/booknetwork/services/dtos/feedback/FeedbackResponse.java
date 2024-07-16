package com.mcancankaya.booknetwork.services.dtos.feedback;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FeedbackResponse {
    private Double note;
    private String comment;
    private boolean ownFeedback;
}
