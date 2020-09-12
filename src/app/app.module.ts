import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { TimerComponent } from './timer/timer.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { HelperComponent } from './helper/helper.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, TimerComponent, FooterComponent, SearchComponent, HelperComponent, NewsComponent ],
  providers:[],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
