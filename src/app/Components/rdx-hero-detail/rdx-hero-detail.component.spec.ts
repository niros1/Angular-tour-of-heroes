import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdxHeroDetailComponent } from './rdx-hero-detail.component';

describe('RdxHeroDetailComponent', () => {
  let component: RdxHeroDetailComponent;
  let fixture: ComponentFixture<RdxHeroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdxHeroDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdxHeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
