import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdxHeroesComponent } from './rdx-heroes.component';

describe('RdxHeroesComponent', () => {
  let component: RdxHeroesComponent;
  let fixture: ComponentFixture<RdxHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdxHeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdxHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
