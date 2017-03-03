import { Http, Headers } from '@angular/http';
import { Hero } from './../../hero';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';


@Injectable()
export class ObsrvHeroService {
    
    private heroesUrl = 'http://fakedomain/api/heroes';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});
    
    constructor(private http: Http) {}

    getHeroes(): Observable<Hero[]> {
        return this.http.get(this.heroesUrl)
        .map(res => res.json());
    }

    getHero(id): Observable<Hero> {
        const url = `${this.heroesUrl}/${id}`;

        return this.http.get(url)
        .map(res => res.json());
    }

    saveHero(hero) {
        if (hero.id === 0) {
            return this.http.post('/api/heroes', hero)
            .map(res => res.json());
        } else {
            return this.http.put('/api/heroes/' + hero.id, hero)
            .map(res => res.json());
        }
    }

    deleteHero(hero : Hero) {
        
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http.delete(url).
        map(res => hero);
    }

}
