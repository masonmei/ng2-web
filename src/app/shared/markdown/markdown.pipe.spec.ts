/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { MarkdownPipe } from './markdown.pipe';

describe('Pipe: Markdown', () => {
  let pipe:MarkdownPipe;

  beforeEach(() => {
    pipe = new MarkdownPipe();
  });

  //specs
  it('should throw if not used with a string', () => {
    //must use arrow function for expect to capture exception
    expect(()=>pipe.transform(null)).toThrow();
  });

  it('should work with empty string', () => {
    expect(pipe.transform('')).toEqual('');
  });

  it('should marked', () => {
    expect(pipe.transform('# Hello')).toEqual('<h1 class="-">Hello</h1>');
  });
});
