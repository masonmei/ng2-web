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
    // this.bookService
    //   .getAll()
    //   .subscribe(bs => this._books = bs,
    //     e => this._errorMessage = e,
    //     () => this._isBookLoading = false);
    this._books = JSON.parse(`
      [
  {
    "id": 1,
    "repository": "https://github.com/masonmei/mason-demo.git",
    "relativePath": "mason/demo",
    "tagName": "demo",
    "refreshInterval": 10000,
    "repositoryType": "GITHUB_PUBLIC",
    "repositoryStatus": "INITIALIZED"
  },
  {
    "id": 2,
    "repository": "https://github.com/masonmei/Testing.git",
    "relativePath": "mason/Testing",
    "tagName": "醉西厢",
    "refreshInterval": 10000,
    "repositoryType": "GITHUB_PUBLIC",
    "repositoryStatus": "INITIALIZED"
  }
]
    `);
  }

}
