import { Component, Input, Output, EventEmitter, OnInit, Directive } from '@angular/core';

@Component({
  selector: 'niro-rdx-hero-form',
  templateUrl: './rdx-hero-form.component.html',
  styleUrls: ['./rdx-hero-form.component.css']
})
export class RdxHeroFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  _hero;
  @Input() set hero(value) {
      this._hero = Object.assign({}, value);
  }
  get hero() {
      return this._hero;
  }

  @Output() back = new EventEmitter();
  @Output() save = new EventEmitter();
}
