import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesPenalizadosComponent } from './pacientes-penalizados.component';

describe('PacientesPenalizadosComponent', () => {
  let component: PacientesPenalizadosComponent;
  let fixture: ComponentFixture<PacientesPenalizadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacientesPenalizadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacientesPenalizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
