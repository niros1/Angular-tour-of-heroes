import { environment } from './../../environments/environment';
import { Http } from '@angular/http';
import { HeroServiceIml } from './hero.service';
import { FakeHeroService } from './fakeHero.service';
import { IHeroService } from './IHero.service';

export let heroServiceFactory = getService;

export function getService(http:Http) : IHeroService {
  
  return environment.useFakeHttp ? new FakeHeroService(http) : new HeroServiceIml(http);
};



export let heroServiceProvider = {
    provide: IHeroService,
    useFactory: heroServiceFactory,
    deps: [Http]
  };
