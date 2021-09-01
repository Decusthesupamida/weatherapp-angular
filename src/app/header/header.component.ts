import { Component, OnInit } from '@angular/core';
import { ChangeCityService } from '../changeCity.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  dateNow:Date = new Date();
  dataCity:string = "";
  constructor(private readonly changeCity:ChangeCityService) { }

  public setCity() : void{
    this.changeCity.changeName(this.dataCity);
    this.dataCity = "";
  }
  ngOnInit() {
  }

}
