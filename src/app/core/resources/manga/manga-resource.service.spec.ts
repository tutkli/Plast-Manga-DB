import { TestBed } from '@angular/core/testing';

import { MangaResourceService } from './manga-resource.service';

describe('MangaResourceService', () => {
  let service: MangaResourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MangaResourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
