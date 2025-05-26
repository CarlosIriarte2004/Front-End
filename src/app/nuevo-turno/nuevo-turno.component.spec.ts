import { ComponentFixture, TestBed } from '@angular/core/testing'; 
import { NuevoTurnoComponent } from './nuevo-turno.component';
import { FormsModule } from '@angular/forms';

describe('NuevoTurnoComponent', () => {
  let component: NuevoTurnoComponent; 
  let fixture: ComponentFixture<NuevoTurnoComponent>; 

  beforeEach(async () => {
  
    await TestBed.configureTestingModule({
      imports: [NuevoTurnoComponent, FormsModule] 
    })
    .compileComponents(); 
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoTurnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy(); 
  });

  it('should initialize form fields to empty strings', () => {
    expect(component.nombrePaciente).toBe('');
    expect(component.especialidad).toBe('');
    expect(component.nombreMedico).toBe('');
    expect(component.fecha).toBe('');
    expect(component.hora).toBe('');
  });

  it('should log form data when registrarTurno is called', () => {

    const consoleSpy = spyOn(console, 'log');

    component.nombrePaciente = 'Juan Pérez';
    component.especialidad = 'Cardiología';
    component.nombreMedico = 'Dr. Smith';
    component.fecha = '2025-12-25';
    component.hora = '14:30';

    component.registrarTurno();

    expect(consoleSpy).toHaveBeenCalledWith('Registrando nuevo turno:', {
      nombrePaciente: 'Juan Pérez',
      especialidad: 'Cardiología',
      nombreMedico: 'Dr. Smith',
      fecha: '2025-12-25',
      hora: '14:30'
    });
  });
});
