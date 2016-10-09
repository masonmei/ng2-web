import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit {

  private _currentBook:string = "Choose your Book";
  private _books: string[] = ["This", "is", "a", "testing", "book", "for", "You!"];

  private _sidebarOpenedDataUpdate:any;

  ngOnInit() {
  }

  changeBook(book:string):void {
    this._currentBook = book;
  }

}
