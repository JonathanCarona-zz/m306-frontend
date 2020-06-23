import { TestBed } from '@angular/core/testing';

import { SlotmachineService } from './slotmachine.service';

describe('SlotmachineService', () => {
  let service: SlotmachineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlotmachineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
