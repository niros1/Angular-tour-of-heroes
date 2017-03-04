import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdxHeroListComponent } from './rdx-hero-list.component';

describe('RdxHeroListComponent', () => {
  let component: RdxHeroListComponent;
  let fixture: ComponentFixture<RdxHeroListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdxHeroListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdxHeroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
