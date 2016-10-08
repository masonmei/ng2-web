import { Component, OnInit } from '@angular/core';
import { StatusService } from '../service/global/status.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})
export class HeaderComponent implements OnInit {
  private _title:string = "Git Book";

  private _currentBook:string = "Choose your Book";
  private _books: string[] = ["I", "Love", "You!"];

  private _sidebarOpened:boolean = true;
  private _sidebarOpenedDataUpdate:any;

  constructor(private statusService: StatusService) {
    this._books.push('First');
    this._sidebarOpenedDataUpdate = this.statusService._sidebarToggleDateUpdate;
  }

  ngOnInit() {
  }

  changeBook(book:string):void {
    this._currentBook = book;
  }

  toggleSidebar():void {
    this._sidebarOpened = !this._sidebarOpened;
    this.statusService._sidebarToggle = this._sidebarOpened;
    this.statusService._sidebarToggleDateUpdate.emit();
  }

}
