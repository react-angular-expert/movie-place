import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastDetailsComponent } from './cast-details.component';

describe('CastDetailsComponent', () => {
  let component: CastDetailsComponent;
  let fixture: ComponentFixture<CastDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
