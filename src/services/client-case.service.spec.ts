import { TestBed } from '@angular/core/testing';

import { ClientCaseService } from './client-case.service';

describe('ClientCaseService', () => {
  let service: ClientCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
