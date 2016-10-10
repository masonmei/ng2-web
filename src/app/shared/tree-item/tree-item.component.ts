import {Component, OnInit, Input} from "@angular/core";
import {MenuItem} from "../model/book";

@Component({
  selector: 'app-tree-item',
  templateUrl: './tree-item.component.html',
  styleUrls: ['./tree-item.component.css']
})
export class TreeItemComponent implements OnInit {

  @Input() _menuItem:MenuItem;
  @Input() _idxPrefix:string;
  @Input() _idx:number;
  private _fullIdx:string;

  constructor() {
  }

  ngOnInit() {
    this._fullIdx = this.buildIdx();
  }

  buildIdx():string {
    if (this._idxPrefix != null) {
      return this._idxPrefix + '.' + (this._idx + 1);
    }
    return '' + (this._idx + 1);
  }
}
