import { HeroActions } from './RDX_Actions/hero';
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
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import {EffectsModule} from '@ngrx/effects';

import {Store, StoreModule} from '@ngrx/store';
import reducer from './RDX_Reducers';
import {HeroEffects} from './RDX_Effects/hero';

import { RdxHeroesComponent } from './Components/rdx-heroes/rdx-heroes.component';


import { RdxHeroDetailComponent } from './components/rdx-hero-detail/rdx-hero-detail.component';
import { RdxHeroFormComponent } from './components/rdx-hero-form/rdx-hero-form.component';
import { RdxHeroListComponent } from './components/rdx-hero-list/rdx-hero-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent,
    RdxHeroesComponent, 
    RdxHeroDetailComponent,
    RdxHeroFormComponent,
    RdxHeroListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    StoreModule.provideStore(reducer),
    EffectsModule.run(HeroEffects)
    
  ],
  providers: [HeroService,ObsrvHeroService, HeroActions],
  bootstrap: [AppComponent]
})
export class AppModule { }

