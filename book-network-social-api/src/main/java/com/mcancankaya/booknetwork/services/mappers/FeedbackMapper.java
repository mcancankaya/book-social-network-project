package com.mcancankaya.booknetwork.services.mappers;

import com.mcancankaya.booknetwork.entities.Feedback;
import com.mcancankaya.booknetwork.entities.book.Book;
import com.mcancankaya.booknetwork.services.dtos.feedback.FeedbackRequest;
import com.mcancankaya.booknetwork.services.dtos.feedback.FeedbackResponse;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class FeedbackMapper {
    public Feedback toFeedback(FeedbackRequest request) {
        return Feedback.builder()
                .note(request.note())
                .comment(request.comment())
                .book(Book.builder().id(request.bookId()).build())
                .build();
    }

    public FeedbackResponse toFeedbackResponse(Feedback feedback, Integer userId) {
        return FeedbackResponse.builder()
                .note(feedback.getNote())
                .comment(feedback.getComment())
                .ownFeedback(Objects.equals(feedback.getCreatedBy(), userId))
                .build();
    }
}
