/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { approveReturnBorrowBook } from '../fn/book/approve-return-borrow-book';
import { ApproveReturnBorrowBook$Params } from '../fn/book/approve-return-borrow-book';
import { BookResponse } from '../models/book-response';
import { borrow } from '../fn/book/borrow';
import { Borrow$Params } from '../fn/book/borrow';
import { findAll } from '../fn/book/find-all';
import { FindAll$Params } from '../fn/book/find-all';
import { findAllBorrowedByOwner } from '../fn/book/find-all-borrowed-by-owner';
import { FindAllBorrowedByOwner$Params } from '../fn/book/find-all-borrowed-by-owner';
import { findAllByOwner } from '../fn/book/find-all-by-owner';
import { FindAllByOwner$Params } from '../fn/book/find-all-by-owner';
import { findAllReturnedByOwner } from '../fn/book/find-all-returned-by-owner';
import { FindAllReturnedByOwner$Params } from '../fn/book/find-all-returned-by-owner';
import { findById } from '../fn/book/find-by-id';
import { FindById$Params } from '../fn/book/find-by-id';
import { PageResponseBookResponse } from '../models/page-response-book-response';
import { PageResponseBorrowedBookResponse } from '../models/page-response-borrowed-book-response';
import { returnBorrowBook } from '../fn/book/return-borrow-book';
import { ReturnBorrowBook$Params } from '../fn/book/return-borrow-book';
import { save1 } from '../fn/book/save-1';
import { Save1$Params } from '../fn/book/save-1';
import { updateArchivedStatus } from '../fn/book/update-archived-status';
import { UpdateArchivedStatus$Params } from '../fn/book/update-archived-status';
import { updateShareableStatus } from '../fn/book/update-shareable-status';
import { UpdateShareableStatus$Params } from '../fn/book/update-shareable-status';
import { uploadCoverPicture } from '../fn/book/upload-cover-picture';
import { UploadCoverPicture$Params } from '../fn/book/upload-cover-picture';

@Injectable({ providedIn: 'root' })
export class BookService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `findAll()` */
  static readonly FindAllPath = '/books';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll$Response(params?: FindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseBookResponse>> {
    return findAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll(params?: FindAll$Params, context?: HttpContext): Observable<PageResponseBookResponse> {
    return this.findAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseBookResponse>): PageResponseBookResponse => r.body)
    );
  }

  /** Path part for operation `save1()` */
  static readonly Save1Path = '/books';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `save1()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save1$Response(params: Save1$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return save1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `save1$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  save1(params: Save1$Params, context?: HttpContext): Observable<number> {
    return this.save1$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `uploadCoverPicture()` */
  static readonly UploadCoverPicturePath = '/books/cover/{bookId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadCoverPicture()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadCoverPicture$Response(params: UploadCoverPicture$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return uploadCoverPicture(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadCoverPicture$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadCoverPicture(params: UploadCoverPicture$Params, context?: HttpContext): Observable<{
}> {
    return this.uploadCoverPicture$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `borrow()` */
  static readonly BorrowPath = '/books/borrow/{bookId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `borrow()` instead.
   *
   * This method doesn't expect any request body.
   */
  borrow$Response(params: Borrow$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return borrow(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `borrow$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  borrow(params: Borrow$Params, context?: HttpContext): Observable<number> {
    return this.borrow$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `updateShareableStatus()` */
  static readonly UpdateShareableStatusPath = '/books/shareable/{bookId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateShareableStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateShareableStatus$Response(params: UpdateShareableStatus$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return updateShareableStatus(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateShareableStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateShareableStatus(params: UpdateShareableStatus$Params, context?: HttpContext): Observable<number> {
    return this.updateShareableStatus$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `returnBorrowBook()` */
  static readonly ReturnBorrowBookPath = '/books/borrow/return/{bookId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `returnBorrowBook()` instead.
   *
   * This method doesn't expect any request body.
   */
  returnBorrowBook$Response(params: ReturnBorrowBook$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return returnBorrowBook(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `returnBorrowBook$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  returnBorrowBook(params: ReturnBorrowBook$Params, context?: HttpContext): Observable<number> {
    return this.returnBorrowBook$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `approveReturnBorrowBook()` */
  static readonly ApproveReturnBorrowBookPath = '/books/borrow/return/approve/{bookId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `approveReturnBorrowBook()` instead.
   *
   * This method doesn't expect any request body.
   */
  approveReturnBorrowBook$Response(params: ApproveReturnBorrowBook$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return approveReturnBorrowBook(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `approveReturnBorrowBook$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  approveReturnBorrowBook(params: ApproveReturnBorrowBook$Params, context?: HttpContext): Observable<number> {
    return this.approveReturnBorrowBook$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `updateArchivedStatus()` */
  static readonly UpdateArchivedStatusPath = '/books/archived/{bookId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateArchivedStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateArchivedStatus$Response(params: UpdateArchivedStatus$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return updateArchivedStatus(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateArchivedStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateArchivedStatus(params: UpdateArchivedStatus$Params, context?: HttpContext): Observable<number> {
    return this.updateArchivedStatus$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findById()` */
  static readonly FindByIdPath = '/books/{bookId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById$Response(params: FindById$Params, context?: HttpContext): Observable<StrictHttpResponse<BookResponse>> {
    return findById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById(params: FindById$Params, context?: HttpContext): Observable<BookResponse> {
    return this.findById$Response(params, context).pipe(
      map((r: StrictHttpResponse<BookResponse>): BookResponse => r.body)
    );
  }

  /** Path part for operation `findAllReturnedByOwner()` */
  static readonly FindAllReturnedByOwnerPath = '/books/returned';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllReturnedByOwner()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllReturnedByOwner$Response(params?: FindAllReturnedByOwner$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseBorrowedBookResponse>> {
    return findAllReturnedByOwner(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllReturnedByOwner$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllReturnedByOwner(params?: FindAllReturnedByOwner$Params, context?: HttpContext): Observable<PageResponseBorrowedBookResponse> {
    return this.findAllReturnedByOwner$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseBorrowedBookResponse>): PageResponseBorrowedBookResponse => r.body)
    );
  }

  /** Path part for operation `findAllByOwner()` */
  static readonly FindAllByOwnerPath = '/books/owner';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllByOwner()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllByOwner$Response(params?: FindAllByOwner$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseBookResponse>> {
    return findAllByOwner(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllByOwner$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllByOwner(params?: FindAllByOwner$Params, context?: HttpContext): Observable<PageResponseBookResponse> {
    return this.findAllByOwner$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseBookResponse>): PageResponseBookResponse => r.body)
    );
  }

  /** Path part for operation `findAllBorrowedByOwner()` */
  static readonly FindAllBorrowedByOwnerPath = '/books/borrowed';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllBorrowedByOwner()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllBorrowedByOwner$Response(params?: FindAllBorrowedByOwner$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseBorrowedBookResponse>> {
    return findAllBorrowedByOwner(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllBorrowedByOwner$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllBorrowedByOwner(params?: FindAllBorrowedByOwner$Params, context?: HttpContext): Observable<PageResponseBorrowedBookResponse> {
    return this.findAllBorrowedByOwner$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseBorrowedBookResponse>): PageResponseBorrowedBookResponse => r.body)
    );
  }

}
