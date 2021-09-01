import { Component, Input, OnInit } from '@angular/core';
import { ChangeCityService } from '../changeCity.service';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
HttpClient

@Component({
  selector: 'app-main-weather',
  templateUrl: './main-weather.component.html',
  styleUrls: ['./main-weather.component.css']
})
export class MainWeatherComponent implements OnInit {
  private subs!: Subscription;
  API_KEY:string = "e475470feb57482ab26133137213008 ";
  response:any;
  visible:boolean = false;
  dateNow:Date = new Date();
  checkTime:boolean = this.dateNow.getHours()>12 ? true:false;
  constructor(private readonly changeCity:ChangeCityService,private http: HttpClient) { }

  getWeatherFromCity(city:string){
    this.http.get('http://api.weatherapi.com/v1/forecast.json?key='+this.API_KEY+'&q='+city+'&days=7&aqi=no&alerts=no')
    .subscribe((response)=>{
      this.response = response;
      console.log(this.response);
      this.visible = true;
    })
  }
  ngOnInit() {
   this.subs = this.changeCity.city$.subscribe((city)=> this.getWeatherFromCity(city));
   console.log(this.checkTime)
  }

}
