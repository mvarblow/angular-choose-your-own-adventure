import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PageComponent } from './page/page.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: PageComponent },
      { path: '/pages/:index', component: PageComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    PageComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
