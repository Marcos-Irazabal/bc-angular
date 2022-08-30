import { TestBed } from '@angular/core/testing';

import { RecetaServiceService } from './receta-service.service';

describe('RecetaServiceService', () => {
  let service: RecetaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecetaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
