import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartwarsComponent } from './startwars.component';

describe('StartwarsComponent', () => {
  let component: StartwarsComponent;
  let fixture: ComponentFixture<StartwarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StartwarsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartwarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
