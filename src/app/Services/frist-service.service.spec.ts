import { TestBed, inject } from '@angular/core/testing';

import { FristServiceService } from './frist-service.service';

describe('FristServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FristServiceService]
    });
  });

  it('should be created', inject([FristServiceService], (service: FristServiceService) => {
    expect(service).toBeTruthy();
  }));
});
