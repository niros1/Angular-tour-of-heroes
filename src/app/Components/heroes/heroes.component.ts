import { IHeroService } from './../../services/IHero.service';
import { Component,OnInit } from '@angular/core';
import {Hero} from '../../hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
//import {HeroService} from '../../services/hero.service'
import {Router } from '@angular/router';

@Component({
  selector: 'niro-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
  
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes : Hero[];


  constructor(private heroService: IHeroService, private router : Router) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;

  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }

  delete(hero: Hero): void {
    this.heroService
        .delete(hero.id)
        .then(() => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        });
  }




  
}
