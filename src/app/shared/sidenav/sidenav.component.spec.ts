/* tslint:disable:no-unused-variable */

import { TestBed, async, inject} from '@angular/core/testing';
import { SidenavComponent } from './sidenav.component';
import {GlobalService} from "../service/global/global.service";

describe('Component: Sidenav', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalService]
    });
  });

  it('should create an instance', inject([GlobalService], (globalService: GlobalService) => {
    let component = new SidenavComponent(globalService);
    expect(component).toBeTruthy();
  }));
});
