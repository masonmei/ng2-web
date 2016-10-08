import { Component, OnInit, ViewChild } from '@angular/core';

import { GlobalService } from '../service/global/global.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @ViewChild('sidenav') sidenav;

  _sidebarOpenedDataUpdate:any;

  constructor(private statusService: GlobalService) { }

  ngOnInit() {
    this._sidebarOpenedDataUpdate = this.statusService._sidebarToggleDateUpdate
      .subscribe(() => {
        this.sidenav.toggle();
      });
  }

}
