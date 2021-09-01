import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChangeCityService {
  public city$ = new Subject<string>();

  public changeName(city: string) {
    this.city$.next(city);
  }
}
