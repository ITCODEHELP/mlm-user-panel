import { TestBed } from '@angular/core/testing';

import { MlmService } from './mlm.service';

describe('MlmService', () => {
  let service: MlmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MlmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
