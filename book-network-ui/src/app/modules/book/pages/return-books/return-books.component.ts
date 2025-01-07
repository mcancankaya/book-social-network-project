import {Component, OnInit} from '@angular/core';
import {PageResponseBorrowedBookResponse} from "../../../../services/models/page-response-borrowed-book-response";
import {FeedbackRequest} from "../../../../services/models/feedback-request";
import {BorrowedBookResponse} from "../../../../services/models/borrowed-book-response";
import {BookService} from "../../../../services/services/book.service";
import {FeedbackService} from "../../../../services/services/feedback.service";

@Component({
  selector: 'app-return-books',
  templateUrl: './return-books.component.html',
  styleUrls: ['./return-books.component.scss']
})
export class ReturnBooksComponent implements OnInit {
  returnedBooks: PageResponseBorrowedBookResponse = {};
  size = 5;
  page = 0;
  message = '';
  level = 'success';

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.findAllReturnedBooks();
  }


  private findAllReturnedBooks() {
    this.bookService.findAllReturnedByOwner(
      {
        page: this.page,
        size: this.size
      }
    ).subscribe(
      {
        next: (resp) => {
          this.returnedBooks = resp;
        }
      }
    )
  }

  /**
   * PAGINATION
   */
  goToFirstPage() {
    this.page = 0;
    this.findAllReturnedBooks();
  }

  goToPreviousPage() {
    this.page--;
    this.findAllReturnedBooks();
  }

  goToPage(index: number) {
    this.page = index;
    this.findAllReturnedBooks();
  }

  goToNextPage() {
    this.page++;
    this.findAllReturnedBooks();
  }

  goToLastPage() {
    this.page = this.returnedBooks.totalPages as number - 1;
    this.findAllReturnedBooks();
  }

  get isLastPage(): boolean {
    return this.page == this.returnedBooks.totalPages as number - 1;
  }

  approveBookReturn(book: BorrowedBookResponse) {
    if (!book.returned) {
      this.level = 'error';
      this.message = 'The book is not yet returned';
      return;
    }
    this.bookService.approveReturnBorrowBook({
      'bookId': book.id as number
    }).subscribe({
      next: () => {
        this.level = 'success';
        this.message = 'Book return approved.';
        this.findAllReturnedBooks();
      }
    });
  }
}
