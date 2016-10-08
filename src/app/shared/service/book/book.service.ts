import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Book, MenuItem, Article} from "../../model/book";

@Injectable()
export class BookService {

  private baseUrl:string = 'http://localhost:8080';

  constructor(private http:Http) {
  }

  getAll():Observable<Book[]> {
    let books$ = this.http
      .get(`${this.baseUrl}/api/repos/all`, {headers: this.getHeaders()})
      .map(mapBooks)
      .catch(handleError);
    return books$;
  }

  get(id:number):Observable<Book> {
    let book$ = this.http
      .get(`${this.baseUrl}/api/repos/${id}`, {headers: this.getHeaders()})
      .map(mapBook);
    return book$;
  }

  loadBookArticles(bookRelativePath:string):Observable<Article[]> {
    let articles$ = this.http
      .get(`${this.baseUrl}/api/files/${bookRelativePath}`, {headers: this.getHeaders()})
      .map(mapArticles)
      .catch(handleError);
    return articles$;
  }

  loadArticleContent(contentPath:string):Observable<string> {
    let content$ = this.http
      .get(`${this.baseUrl}/${contentPath}`)
      .map(mapArticleContent);
    return content$;
  }

  buildStaticPath(bookRelativePath:string):string {
    let url:string = this.baseUrl + "/" + bookRelativePath;
    return url;
  }

  loadMenu(repoId:number):Observable<MenuItem> {
    let menu$ = this.http
      .get(`${this.baseUrl}/api/menus/${repoId}`, {headers: this.getHeaders()})
      .map(mapMenu);
    return menu$;
  }

  loadFullMenu(repoId:number):Observable<MenuItem> {
    let fullMenu$ = this.http
      .get(`${this.baseUrl}/api/menus/${repoId}/full`, {headers: this.getHeaders()})
      .map(mapMenu);
    return fullMenu$;
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}
function mapArticleContent(response:Response):string {
  return response.text();
}
function mapArticles(response:Response):Article[] {
  return response.json().map(toArticle);
}

function toArticle(r:any):Article {
  let article = <Article>({
    name: r.name,
    relativePath: r.relativePath
  });
  return article;
}

function mapBooks(response:Response):Book[] {
  // uncomment to simulate error:
  // throw new Error('ups! Force choke!');

  // The response of the API has a results
  // property with the actual results
  return response.json().map(toBook)
}

function mapBook(response:Response):Book {
// toPerson looks just like in the previous example
  return toBook(response.json());
}

function toBook(r:any):Book {
  let book = <Book>({
    id: r.id,
    repository: r.repository,
    relativePath: r.relativePath,
    tagName: r.tagName,
    refreshInterval: r.refreshInterval,
    repositoryStatus: r.repositoryStatus,
    repositoryType: r.repositoryType,
  });
  return book;
}


function toMenu(r:any):MenuItem {
  let menu = <MenuItem>({
    name: r.name,
    relativePath: r.relativePath,
    children: buildChildren(r.children)
  });
  return menu;
}

function buildChildren(items:any[]):MenuItem[] {
  if (items.length != null) {
    let children:MenuItem[] = [];
    items.forEach(item => children.push(toMenu(item)));
    return children;
  }
  return [];
}

function mapMenu(response:Response):MenuItem {
// toPerson looks just like in the previous example
  var json = response.json();
  return toMenu(json);
}

// this could also be a private method of the component class
function handleError(error:any) {
// log error
// could be something more sofisticated
  let errorMsg = error.message || `Yikes! There was was a problem with our hyperdrive device and we couldn't retrieve your data!`
  console.error(errorMsg);

// throw an application level error
  return Observable.throw(errorMsg);
}
