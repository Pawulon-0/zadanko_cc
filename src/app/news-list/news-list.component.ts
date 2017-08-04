import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  news;

  constructor(private http: Http) { }

  ngOnInit() {
    
    this.getNews();
  }

  getNews(){
    this.http.get('https://www.reddit.com/r/all/new/.json').subscribe(
      res=>{
        // console.log(res);
        this.news = res.json().data.children;
        console.log(this.news);
      }
    )
  }
}
