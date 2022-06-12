import { TestBed } from '@angular/core/testing';

import { RestCategoryService } from './rest-category.service';

describe('RestCategoryService', () => {
  let service: RestCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
