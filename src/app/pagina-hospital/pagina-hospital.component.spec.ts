import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; 
import { PaginaHospitalComponent } from './pagina-hospital.component';

describe('PaginaHospitalComponent', () => {
  let component: PaginaHospitalComponent;
  let fixture: ComponentFixture<PaginaHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PaginaHospitalComponent, 
        RouterTestingModule 
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title "Pagina central - Hospital/Clinica"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.page-title')?.textContent).toContain('Pagina central - Hospital/Clinica');
  });

  it('should display "Bandeja de entrada" title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.inbox-title')?.textContent).toContain('Bandeja de entrada');
  });

  it('should display initial appointments', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const appointmentCards = compiled.querySelectorAll('.appointment-card');
    expect(appointmentCards.length).toBe(component.citas.length);
  });

  it('should remove an appointment when cancel button is clicked', () => {
    const initialCitasCount = component.citas.length;
    // Simula el clic en el botón de cancelar de la primera cita
    const compiled = fixture.nativeElement as HTMLElement;
    const closeButton = compiled.querySelector('.appointment-card .close-button') as HTMLButtonElement;
    closeButton.click();
    fixture.detectChanges(); // Detecta los cambios en el DOM

    expect(component.citas.length).toBe(initialCitasCount - 1);
    const updatedAppointmentCards = compiled.querySelectorAll('.appointment-card');
    expect(updatedAppointmentCards.length).toBe(initialCitasCount - 1);
  });

  it('should call verEnCalendario when "Ver en calendario" button is clicked', () => {
    spyOn(component, 'verEnCalendario'); // Espía el método
    const compiled = fixture.nativeElement as HTMLElement;
    const viewCalendarButton = compiled.querySelector('.view-calendar-button') as HTMLButtonElement;
    viewCalendarButton.click();
    expect(component.verEnCalendario).toHaveBeenCalled();
  });
});
