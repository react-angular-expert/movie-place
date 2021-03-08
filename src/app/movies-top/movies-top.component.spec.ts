import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesTopComponent } from './movies-top.component';

describe('MoviesTopComponent', () => {
  let component: MoviesTopComponent;
  let fixture: ComponentFixture<MoviesTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
