import {Component, OnInit} from "@angular/core";
import {Book} from "../../shared/model/book";
import {BookService} from "../../shared/service/book/book.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  _errorMessage:string = '';
  _isBookLoading:boolean = true;
  _books:Book[] = [];

  constructor(private bookService:BookService) {
  }

  ngOnInit() {
    this.bookService
      .getAll()
      .subscribe(bs => this._books = bs,
        e => this._errorMessage = e,
        () => this._isBookLoading = false);
  }

}
