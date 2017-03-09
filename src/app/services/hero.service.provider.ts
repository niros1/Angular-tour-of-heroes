import { environment } from './../../environments/environment';
import { Http } from '@angular/http';
import { HeroServiceIml } from './hero.service';
import { FakeHeroService } from './fakeHero.service';
import { IHeroService } from './IHero.service';

let heroServiceFactory = (http:Http) => {
  if(environment.useFakeHttp){
      return new FakeHeroService(http) as IHeroService;
  }
  else{
      return new HeroServiceIml(http) as IHeroService;
  }
};



export let heroServiceProvider =
  { 
    provide: IHeroService,
    useFactory: heroServiceFactory,
    deps: [Http]
  };
