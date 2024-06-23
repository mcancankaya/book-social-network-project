package com.mcancankaya.booknetwork.entities.book;

import com.mcancankaya.booknetwork.entities.common.BaseEntity;
import com.mcancankaya.booknetwork.entities.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;

@Getter
@Setter
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class BookTransactionHistory extends BaseEntity {
    @Id
    @GeneratedValue(generator = "booktransaction_id_generator")
    @SequenceGenerator(name = "booktransaction_id_generator", sequenceName = "booktransaction_id_seq", allocationSize = 1)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    @ManyToOne
    @JoinColumn(name = "book_id")
    private Book book;
    private boolean returned;
    private boolean returnApproved;
}
