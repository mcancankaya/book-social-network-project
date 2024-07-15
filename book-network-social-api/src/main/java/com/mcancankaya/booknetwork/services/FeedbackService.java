package com.mcancankaya.booknetwork.services;

import com.mcancankaya.booknetwork.core.exceptions.OperationNotPermittedException;
import com.mcancankaya.booknetwork.entities.Feedback;
import com.mcancankaya.booknetwork.entities.book.Book;
import com.mcancankaya.booknetwork.entities.user.User;
import com.mcancankaya.booknetwork.repositories.BookRepository;
import com.mcancankaya.booknetwork.repositories.FeedbackRepository;
import com.mcancankaya.booknetwork.services.dtos.feedback.FeedbackRequest;
import com.mcancankaya.booknetwork.services.mappers.FeedbackMapper;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
@RequiredArgsConstructor
public class FeedbackService {
    private final BookRepository bookRepository;
    private final FeedbackMapper feedbackMapper;
    private final FeedbackRepository feedbackRepository;

    public Integer save(FeedbackRequest request, Authentication connectedUser) {
        Book book = bookRepository.findById(request.bookId())
                .orElseThrow(() -> new EntityNotFoundException("No book found with the ID :: " + request.bookId()));

        if (book.isArchived() || !book.isShareable()) {
            throw new OperationNotPermittedException("You cannot give a feedback for an archived or not shareable book");
        }

        User user = ((User) connectedUser.getPrincipal());
        if (Objects.equals(book.getOwner().getId(), user.getId())) {
            throw new OperationNotPermittedException("You cannot give a feedback to your own book");
        }

        Feedback feedback = feedbackMapper.toFeedback(request);
        return feedbackRepository.save(feedback).getId();
    }
}
