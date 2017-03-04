import { Hero } from './../../hero';
import { HeroActions } from './../../RDX_Actions/hero';
import { AppState } from './../../RDX_Reducers/index';

import { Component, EventEmitter, Input, OnInit, OnDestroy, Output, Directive } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Store} from '@ngrx/store';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import {RdxHeroFormComponent} from '../rdx-hero-form/rdx-hero-form.component'



// import {HeroForm} from './hero-form.component';


@Component({
    selector: 'niro-rdx-hero-detail',
    template: `
        <niro-rdx-hero-form
            [hero]="hero | async"
            (back)="goBack()"
            (save)="save($event)"
        ></niro-rdx-hero-form>
    `,
    styleUrls: ['./rdx-hero-detail.component.css']
    
    //Directive: [RdxHeroFormComponent]
})
export class RdxHeroDetailComponent implements OnInit, OnDestroy {
    idSub: Subscription;
    hero: Observable<any>;
    navigated = false;

    @Output() close = new EventEmitter();

    constructor(
        private store: Store<AppState>,
        private route: ActivatedRoute,
        private heroActions: HeroActions,
        private router: Router
    ) {
        this.hero = store.select('hero');
    }

    ngOnInit() {
      const fff= "ddd";
        // this.idSub = this.route.params
        //     .select<string>('id')
        //     //.map(p => p.)
        //     .subscribe(id => {
        //         if (id) {
        //             this.store.dispatch(this.heroActions.getHero(id));
        //             this.navigated = true;
        //         } else {
        //             this.store.dispatch(this.heroActions.resetBlankHero());
        //             this.navigated = false;
        //         }
        //     });
    }

    ngOnDestroy() {
        this.idSub.unsubscribe();
    }

    goBack(savedHero: Hero = null) {
        this.close.emit(savedHero);
        if (this.navigated) { window.history.back(); }
    }

    save(hero) {
        if (hero.id === 0) {
            this.store.dispatch(this.heroActions.addHero(hero));
        } else {
            this.store.dispatch(this.heroActions.saveHero(hero));
        }
        this.goBack(hero);
    }
}