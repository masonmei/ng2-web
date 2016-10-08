import { Component, OnInit } from '@angular/core';

import { GlobalService } from '../service/global/global.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  _sidebarOpened:boolean = true;
  _sidebarOpenedDataUpdate:any;

  constructor(private statusService: GlobalService) { }

  ngOnInit() {
    this._sidebarOpened = this.statusService._sidebarToggle;
    this._sidebarOpenedDataUpdate = this.statusService._sidebarToggleDateUpdate
      .subscribe(() => {
        this._sidebarOpened = this.statusService._sidebarToggle;
      });
  }

}
