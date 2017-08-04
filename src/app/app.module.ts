import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';

const appRoutes: Routes = [
  { path: 'news-list', component: NewsListComponent },
  { path: 'news-detail', component: NewsDetailComponent },
  {path: '**', redirectTo: '/news-list', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    NewsDetailComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
