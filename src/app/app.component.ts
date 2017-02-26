import { Component,OnInit } from '@angular/core';
import {Hero} from './hero';



@Component({
  selector: 'niro-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Tour of Heroes';


  constructor(){
    //this.selectedHero = new Hero();
  }

  ngOnInit() {
  }

  
  
}


