import { inject, TestBed } from '@angular/core/testing';

import { IndividualAdapterService } from './individual-adapter.service';

describe('IndividualAdapterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndividualAdapterService]
    });
  });

  it('should be created', inject([IndividualAdapterService], (service: IndividualAdapterService) => {
    expect(service).toBeTruthy();
  }));
});
