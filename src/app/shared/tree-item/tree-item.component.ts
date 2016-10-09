import { Component, OnInit, Input } from '@angular/core';
import {MenuItem} from "../model/book";

@Component({
  selector: 'app-tree-item',
  templateUrl: './tree-item.component.html',
  styleUrls: ['./tree-item.component.css']
})
export class TreeItemComponent implements OnInit {

  @Input() _menuItem: MenuItem;

  constructor() { }

  ngOnInit() {
  }

}
