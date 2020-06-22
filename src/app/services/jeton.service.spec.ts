import { TestBed } from '@angular/core/testing';

import { JetonService } from './jeton.service';

describe('JetonService', () => {
  let service: JetonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JetonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
