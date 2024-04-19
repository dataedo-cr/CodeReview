import { TestBed } from '@angular/core/testing';

import { ScriptRepositoryService } from './script-repository.service';

describe('ScriptRepositoryService', () => {
  let service: ScriptRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScriptRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
