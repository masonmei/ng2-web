import {Injectable} from "@angular/core";
import {EventEmitter} from "@angular/common/src/facade/async";

@Injectable()
export class GlobalService {
  public _sidebarToggleDateUpdate:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

}
