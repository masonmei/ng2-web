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

  private _sidebarOpened:boolean = true;
  private _sidebarOpenedDataUpdate:any;

  constructor(private globalService: GlobalService) {
    this._books.push('First');
    this._sidebarOpenedDataUpdate = this.globalService._sidebarToggleDateUpdate;
  }

  ngOnInit() {
  }

  changeBook(book:string):void {
    this._currentBook = book;
  }

  toggleSidebar():void {
    this._sidebarOpened = !this._sidebarOpened;
    this.globalService._sidebarToggle = this._sidebarOpened;
    this.globalService._sidebarToggleDateUpdate.emit();
  }

}
