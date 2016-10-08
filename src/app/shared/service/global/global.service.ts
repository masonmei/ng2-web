import {Injectable} from "@angular/core";
import {EventEmitter} from "@angular/common/src/facade/async";

@Injectable()
export class GlobalService {
  public _sidebarToggle:boolean = true;
  public _sidebarToggleDateUpdate:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

}
