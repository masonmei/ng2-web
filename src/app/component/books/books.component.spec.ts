/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BooksComponent } from './books.component';
import { BookService } from '../../shared/service/book/book.service';

describe('Component: Books', () => {
  it('should create an instance', inject([BookService], (bookService: BookService) => {
    let component = new BooksComponent(bookService);
    expect(component).toBeTruthy();
  }));
});
