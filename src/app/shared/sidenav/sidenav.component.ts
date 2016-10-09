import { Component } from '@angular/core';
import {MenuItem} from "../model/book";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  _menuItems:MenuItem[];
  constructor() {
    this._menuItems = JSON.parse(
      `
      [
        {
          "name": "name1",
          "relativePath": "relativePath",
          "children": []
        },
        {
          "name": "name2",
          "relativePath": "relativePath",
          "children": []
        },
        {
          "name": "name3",
          "relativePath": "relativePath",
          "children": [
            {
              "name": "name4",
              "relativePath": "relativePath",
              "children": []
            },
             {
              "name": "name5",
              "relativePath": "relativePath",
              "children": []
            }, {
              "name": "name6",
              "relativePath": "relativePath",
              "children": []
            }
          ]
        }
      ]
      `
    );
  }

}
