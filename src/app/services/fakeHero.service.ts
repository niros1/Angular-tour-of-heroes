import { IHeroService } from './IHero.service';
import { Injectable,Inject } from '@angular/core';
import { HEROES } from './mock-heroes'; 
import {Hero} from '../hero'; 
import {Http, Response, Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class FakeHeroService implements IHeroService {

  private heroesUrl = 'http://fakedomain/api/heroes';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(  private http: Http) { }

  

  private handleResponse(response : Response) : Promise<Hero[]>{
    console.log(response);
    return Promise.resolve(response.json());
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  
  update(hero:Hero):Promise<Hero[]> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
    .put(url, JSON.stringify(hero), {headers: this.headers})
    .toPromise()
    .then(() => hero)
    .catch(this.handleError);
  }
  
  getHeroes(): Promise<Hero[]> {
    //return Promise.resolve(HEROES);
    //this.heroesUrl = 'api/heroes';
    return this.http.get(this.heroesUrl).toPromise()
    .then(this.handleResponse)
    .catch(this.handleError);
  }

  getHero(id:number) : Promise<Hero>{
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url).toPromise()
    .then(response => Promise.resolve(response.json()))
    .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
