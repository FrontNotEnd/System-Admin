import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';
import { LayoutsComponent } from './layouts/layouts.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    LayoutsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
