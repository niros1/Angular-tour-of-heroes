import { Router } from '@angular/router';
import { HeroActions } from './../../RDX_Actions/hero';
import { AppState } from './../../RDX_Reducers/index';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'niro-rdx-heroes',
  templateUrl: './rdx-heroes.component.html',
  styleUrls: ['./rdx-heroes.component.css']
})
export class RdxHeroesComponent implements OnInit {

  heroes: Observable<any>;
    addingHero = false;
    selectedHero;

    constructor(
        private store: Store<AppState>,
        private heroActions: HeroActions,
        private router: Router
    ) {
        this.heroes = store.select('heroes');
        console.log('store look like that' + this.heroes);
    }

     ngOnInit() {}

    addHero() {
        this.addingHero = true;
        this.selectedHero = null;
    }

    close() {
        this.addingHero = false;
    }

    delete(hero) {
        this.store.dispatch(this.heroActions.deleteHero(hero));
    }

    select(hero) {
        this.selectedHero = hero;
        this.addingHero = false;
    }

    gotoDetail() {

        this.router.navigateByUrl('/detail/' + this.selectedHero.id);
    }

}
