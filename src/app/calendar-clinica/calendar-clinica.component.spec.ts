import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarClinicaComponent } from './calendar-clinica.component';

describe('CalendarClinicaComponent', () => {
  let component: CalendarClinicaComponent;
  let fixture: ComponentFixture<CalendarClinicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarClinicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarClinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
