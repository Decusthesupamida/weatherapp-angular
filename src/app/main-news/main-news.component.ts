import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-news',
  templateUrl: './main-news.component.html',
  styleUrls: ['./main-news.component.css']
})
export class MainNewsComponent implements OnInit {
  title:string = "LATES NEWS";
  response: any;
  randArr:Array<number> = new Array();
  randNum:number = Math.floor(Math.floor(Math.random() * (99 - 1 + 1)) + 1) ;
  constructor(private http: HttpClient) {

  }

  fillRandValue(){
    for(let i = 0;i<=7;i++){
      this.randArr.push(Math.floor(Math.floor(Math.random() * (99 - 1 + 1)) + 1));
    }
  }
  getNews() {
    this.http.get('https://saurav.tech/NewsAPI/everything/bbc-news.json')
    .subscribe((response)=>{
      this.response = response;
      console.log(this.response);
    })

  }
  
  ngOnInit() {
    this.getNews();
    this.fillRandValue();
  }

}
