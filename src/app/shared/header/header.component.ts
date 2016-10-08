import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../service/global/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit {
  private _title:string = "Git Book";

  private _currentBook:string = "Choose your Book";
  private _books: string[] = ["This", "is", "a", "testing", "book", "for", "You!"];

  private _sidebarOpenedDataUpdate:any;

  constructor(private globalService: GlobalService) {
    this._sidebarOpenedDataUpdate = this.globalService._sidebarToggleDateUpdate;
  }

  ngOnInit() {
  }

  changeBook(book:string):void {
    this._currentBook = book;
  }

  toggleSidebar():void {
    this.globalService._sidebarToggleDateUpdate.emit();
  }

}