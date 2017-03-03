import { TestBed, inject } from '@angular/core/testing';
import { ObsrvHeroService } from './obsrv-hero.service';

describe('ObsrvHeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObsrvHeroService]
    });
  });

  it('should ...', inject([ObsrvHeroService], (service: ObsrvHeroService) => {
    expect(service).toBeTruthy();
  }));
});
