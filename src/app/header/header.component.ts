import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChangeCityService } from '../changeCity.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  dateNow: Date = new Date();
  response: any;
  land: string = '';
  long: string = '';
  private _dataCity: string = '';
  public get dataCity(): string {
    return this._dataCity;
  }
  public set dataCity(val: string) {
    this._dataCity = val;
  }
  constructor(
    private readonly changeCity: ChangeCityService,
    private http: HttpClient
  ) {}

  public setCity(): void {
    this.changeCity.changeName(this.dataCity);
    this._dataCity = '';
  }
  getDefaultCity() {
    var obj = {
      land: '',
      long: '',
    };
    navigator.geolocation.getCurrentPosition(
      function (pos: any) {
        obj.land = pos.coords.latitude;
        obj.long = pos.coords.longitude;
      },
      function () {
        alert('User not allowed');
      },
      { timeout: 10000 }
    );
    this.land = obj.land;
    this.long = obj.long;
    this.http
      .get(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${this.land}&longitude=${this.long}&localityLanguage=en`
      )
      .subscribe((response: any) => {
        this._dataCity = response.city;
      });
  }
  ngOnInit() {
    this.getDefaultCity();
    setTimeout(() => {
      this.setCity()
      console.log('hello');
    
    },1000);
    
  }
}
// http
// .get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${pos.coords.latitude}&longitude=${pos.coords.longitude}&localityLanguage=en`)
// .subscribe((response: any) => {
//   city = response.city
//   console.log(city);

// });
