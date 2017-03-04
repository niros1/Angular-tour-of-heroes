import { AppState } from './RDX_Reducers/index';
import { HeroActions } from './RDX_Actions/hero';
import { Store } from '@ngrx/store';
import { Component,OnInit } from '@angular/core';
import {Hero} from './hero';



@Component({
  selector: 'niro-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Tour of Heroes';


  constructor(
    private store: Store<AppState>,
    private heroActions: HeroActions
  ){}

  ngOnInit() {
    this.store.dispatch(this.heroActions.loadHeroes());
  }

  
  
}


