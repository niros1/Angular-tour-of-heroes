import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdxHeroFormComponent } from './rdx-hero-form.component';

describe('RdxHeroFormComponent', () => {
  let component: RdxHeroFormComponent;
  let fixture: ComponentFixture<RdxHeroFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdxHeroFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdxHeroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
