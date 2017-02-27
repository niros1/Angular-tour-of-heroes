import { Injectable,Inject } from '@angular/core';
import { HEROES } from './mock-heroes'; 
import {Hero} from '../hero'; 
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {

  private heroesUrl = 'http://fakedomain/api/heroes';  // URL to web api

  constructor(  private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    //return Promise.resolve(HEROES);
    return this.http.get(this.heroesUrl).toPromise()
    .then(this.handleResponse)
    .catch(this.handleError);
  }

  private handleResponse(response : Response) : Promise<Hero[]>{
    console.log(response);
    return Promise.resolve(response.json());
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  
  getHero(id:number) : Promise<Hero>{
    return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
  }
}
