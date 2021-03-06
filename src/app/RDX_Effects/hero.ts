import { ObsrvHeroService } from './../services/obsrvHero/obsrv-hero.service';
import { Action } from '@ngrx/store';
//import { HeroService } from './../services/hero.service';
import { HeroActions } from './../RDX_Actions/hero';
import { Injectable } from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';


@Injectable()
export class HeroEffects {
    
    constructor (
        
        private update$: Actions,
        private heroActions: HeroActions,
        private svc: ObsrvHeroService
    ) {}
    

    @Effect() loadHeroes$ = this.update$
        .ofType(HeroActions.LOAD_HEROES)
        .switchMap(() => this.svc.getHeroes())
        // .map(x => {console.log('NIR observer is :' + JSON.stringify(x)); return x; })
        // .do(x => {console.log('observer is :' + JSON.stringify(x))
        .map(heroes => this.heroActions.loadHeroesSuccess(heroes))
        ;


    @Effect() getHero$ = this.update$
        .ofType(HeroActions.GET_HERO)
        .map(action => action.payload)
        .switchMap(id => this.svc.getHero(id))
        .map(hero => this.heroActions.getHeroSuccess(hero));

   
    
    // @Effect() saveHero$ = this.update$
    //     .ofType(HeroActions.SAVE_HERO)
    //     .map(action => action.payload)
    //     .switchMap(hero => this.svc.saveHero(hero))
    //     .map(hero => this.heroActions.saveHeroSuccess(hero));

    // @Effect() addHero$ = this.update$
    //     .ofType(HeroActions.ADD_HERO)
    //     .map(action => action.payload)
    //     .switchMap(hero => this.svc.saveHero(hero))
    //     .map(hero => this.heroActions.addHeroSuccess(hero));

    // @Effect() deleteHero$ = this.update$
    //     .ofType(HeroActions.DELETE_HERO)
    //     .map(action => action.payload)
    //     .switchMap(hero => this.svc.deleteHero(hero))
    //     .map(hero => this.heroActions.deleteHeroSuccess(hero));
}