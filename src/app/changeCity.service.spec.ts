/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ChangeCityService } from './changeCity.service';

describe('Service: ChangeCity', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangeCityService]
    });
  });

  it('should ...', inject([ChangeCityService], (service: ChangeCityService) => {
    expect(service).toBeTruthy();
  }));
});
