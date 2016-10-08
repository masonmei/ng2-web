export class Book {
  id:number;
  repository:string;
  relativePath:string;
  tagName:string;
  refreshInterval:number;
  repositoryType:string;
  repositoryStatus:string;
}

export class Article {
  name:string;
  relativePath:string;
}

export class MenuItem {
  name:string;
  relativePath:string;
  children:MenuItem[];
}
