import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

// module section
import { Ng2WebRoutingModule } from './app-routing.module';

// component section
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { BooksComponent } from './component/books/books.component';
import { BookDetailComponent } from './component/book-detail/book-detail.component';

// service section
import { BookService } from './shared/service/book/book.service';
import { GlobalService } from './shared/service/global/global.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BooksComponent,
    SidenavComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    Ng2WebRoutingModule
  ],
  providers: [BookService, GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
