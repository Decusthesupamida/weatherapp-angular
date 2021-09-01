/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MainNewsService } from './main-news.service';

describe('Service: MainNews', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainNewsService]
    });
  });

  it('should ...', inject([MainNewsService], (service: MainNewsService) => {
    expect(service).toBeTruthy();
  }));
});
