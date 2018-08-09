import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { CountryComponent } from './country/country.component';
import { StateComponent } from './state/state.component';
import { CityComponent } from './city/city.component';
import { SelectedBookComponent } from './selected-book/selected-book.component';
import { HighlighterDirective } from './directives/highlighter/highlighter.directive';
import { HoverElementDirective } from './directives/hover-element/hover-element.directive';
import { BooksService } from './services/books.service';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    CountryComponent,
    StateComponent,
    CityComponent,
    SelectedBookComponent,
    HighlighterDirective,
    HoverElementDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
