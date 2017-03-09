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
      .then(this.handleHeroes);
  }

  private handleHeroes(heroes : any){
    this.heroes = heroes.slice(0, 5);
  }


}
