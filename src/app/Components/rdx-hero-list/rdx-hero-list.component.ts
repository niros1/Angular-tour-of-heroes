import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'niro-rdx-hero-list',
  templateUrl: './rdx-hero-list.component.html',
  styleUrls: ['./rdx-hero-list.component.css']
})
export class RdxHeroListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    @Input() heroes;
    @Input() selectedHero;
    
    @Output() onSelect = new EventEmitter();
    @Output() onDelete = new EventEmitter();
    
    delete($event, hero) {
        $event.stopPropagation();
        this.onDelete.emit(hero);
    }
}