package com.mcancankaya.booknetwork.services.mappers;

import com.mcancankaya.booknetwork.entities.Feedback;
import com.mcancankaya.booknetwork.entities.book.Book;
import com.mcancankaya.booknetwork.services.dtos.feedback.FeedbackRequest;
import org.springframework.stereotype.Service;

@Service
public class FeedbackMapper {
    public Feedback toFeedback(FeedbackRequest request) {
        return Feedback.builder()
                .note(request.note())
                .comment(request.comment())
                .book(Book.builder().id(request.bookId()).build())
                .build();
    }
}
