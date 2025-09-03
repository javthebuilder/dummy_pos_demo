import { TestBed } from '@angular/core/testing';

import { RemoteClientService } from './remote-client.service';

describe('RemoteClientService', () => {
  let service: RemoteClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoteClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
