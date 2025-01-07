import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BookRoutingModule} from './book-routing.module';
import {MainComponent} from './pages/main/main.component';
import {MenuComponent} from './components/menu/menu.component';
import {BookListComponent} from './pages/book-list/book-list.component';
import {BookCardComponent} from './components/book-card/book-card.component';
import {RatingComponent} from './components/rating/rating.component';
import {MyBooksComponent} from './pages/my-books/my-books.component';
import {ManageBookComponent} from './pages/manage-book/manage-book.component';
import {FormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {TranslateModule} from "@ngx-translate/core";
import {MatMenuModule} from "@angular/material/menu";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import { BorrowedBookListComponent } from './pages/borrowed-book-list/borrowed-book-list.component';
import {MatTableModule} from "@angular/material/table";
import { ReturnBooksComponent } from './pages/return-books/return-books.component';


@NgModule({
  declarations: [
    MainComponent,
    MenuComponent,
    BookListComponent,
    BookCardComponent,
    RatingComponent,
    MyBooksComponent,
    ManageBookComponent,
    BorrowedBookListComponent,
    ReturnBooksComponent,
  ],
    imports: [
        CommonModule,
        BookRoutingModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        TranslateModule,
        MatMenuModule,
        MatSelectModule,
        MatButtonToggleModule,
        MatIconModule,
        MatButtonModule,
        MatCheckboxModule,
        MatTableModule
    ]
})
export class BookModule {
}
