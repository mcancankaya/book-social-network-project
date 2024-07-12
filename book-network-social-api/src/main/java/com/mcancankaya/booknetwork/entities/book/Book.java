package com.mcancankaya.booknetwork.entities.book;

import com.mcancankaya.booknetwork.entities.Feedback;
import com.mcancankaya.booknetwork.entities.common.BaseEntity;
import com.mcancankaya.booknetwork.entities.user.User;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.util.List;

@Getter
@Setter
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Book extends BaseEntity {
    @Id
    @GeneratedValue(generator = "book_id_generator")
    @SequenceGenerator(name = "book_id_generator", sequenceName = "book_id_seq", allocationSize = 1)
    private Integer id;
    private String title;
    private String authorName;
    private String isbn;
    private String synopsis;
    private String bookCover;
    private boolean archived;
    private boolean shareable;
    @ManyToOne
    @JoinColumn(name = "owner_id", nullable = false)
    private User owner;
    @OneToMany(mappedBy = "book")
    private List<Feedback> feedbacks;
    @OneToMany(mappedBy = "book")
    private List<BookTransactionHistory> histories;

    @Transient
    public double getRate() {
        if (feedbacks == null || feedbacks.isEmpty()) {
            return 0.0;
        }
        var rate = feedbacks.stream()
                .mapToDouble(Feedback::getNote)
                .average()
                .orElse(0.0);
        double roundedRate = Math.round(rate * 10.0) / 10.0;

        return roundedRate;
    }
}
