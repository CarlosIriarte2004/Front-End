import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalesClinicasComponent } from './hospitales-clinicas.component';

describe('HospitalesClinicasComponent', () => {
  let component: HospitalesClinicasComponent;
  let fixture: ComponentFixture<HospitalesClinicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HospitalesClinicasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalesClinicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
