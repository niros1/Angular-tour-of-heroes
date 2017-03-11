import { IHeroService } from './../../services/IHero.service';
import { Component, OnInit } from '@angular/core';
import {Hero} from '../../hero';
//import {HeroService} from '../../services/hero.service'

@Component({
  selector: 'niro-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];
  constructor(private heroService: IHeroService) { 

  }

  ngOnInit() {
    this.heroService.getHeroes()
      .then(this.handleHeroes.bind(this));
  }

  private handleHeroes(heroes : any){
    let heroes1: Hero[] = [];
    heroes1 = heroes.slice(0, 5);
    this.heroes = heroes1;
    console.log('NOT THAT ONE');
  }


}
