import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'mimic';

// Imports for loading & configuring the in-memory web api


import { AppComponent } from './app.component';
import { HeroDetailComponent } from './Components/hero-detail/hero-detail.component';
import { HeroesComponent } from './Components/heroes/heroes.component';
import {HeroService} from './services/hero.service';
import {ObsrvHeroService} from './services/obsrvHero/obsrv-hero.service';
//import { RouterModule }   from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AppRoutingModule }     from './app-routing/app-routing.module';
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
    
  ],
  providers: [HeroService,ObsrvHeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }

