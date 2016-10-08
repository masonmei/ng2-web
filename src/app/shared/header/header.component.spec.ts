/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { GlobalService } from '../service/global/global.service';

describe('Component: Header', () => {
  it('should create an instance', inject([GlobalService], (globalService: GlobalService) => {
    let component = new HeaderComponent(globalService);
    expect(component).toBeTruthy();
  }));
});
