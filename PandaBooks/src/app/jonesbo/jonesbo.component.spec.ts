import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JonesboComponent } from './jonesbo.component';

describe('JonesboComponent', () => {
  let component: JonesboComponent;
  let fixture: ComponentFixture<JonesboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JonesboComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JonesboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
