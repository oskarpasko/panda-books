import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LackbergComponent } from './lackberg.component';

describe('LackbergComponent', () => {
  let component: LackbergComponent;
  let fixture: ComponentFixture<LackbergComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LackbergComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LackbergComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
