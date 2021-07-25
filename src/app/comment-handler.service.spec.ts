import { TestBed } from '@angular/core/testing';

import { CommentHandlerService } from './comment-handler.service';

describe('CommentHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommentHandlerService = TestBed.get(CommentHandlerService);
    expect(service).toBeTruthy();
  });
});
