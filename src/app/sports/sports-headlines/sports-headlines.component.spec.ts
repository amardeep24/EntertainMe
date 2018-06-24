import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsHeadlinesComponent } from './sports-headlines.component';

describe('SportsHeadlinesComponent', () => {
  let component: SportsHeadlinesComponent;
  let fixture: ComponentFixture<SportsHeadlinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsHeadlinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsHeadlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
