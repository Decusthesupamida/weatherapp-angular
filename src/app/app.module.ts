import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainNewsComponent } from './main-news/main-news.component';
import { MainWeatherComponent } from './main-weather/main-weather.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TypeofPipe } from './type.pipe';


@NgModule({
  declarations: [				
    AppComponent,
      HeaderComponent,
      MainNewsComponent,
      MainWeatherComponent,
      FooterComponent,
      TypeofPipe
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
