import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para las pruebas de formularios

import { LoginMedicoComponent } from './login-medico.component';

describe('LoginMedicoComponent', () => {
  let component: LoginMedicoComponent;
  let fixture: ComponentFixture<LoginMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginMedicoComponent, FormsModule] // Importa el componente y FormsModule
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detecta cambios iniciales en el componente
  });

  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica que el componente se haya creado
  });

  it('should display "INICIO DE SESIÓN" title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('INICIO DE SESIÓN'); // Verifica el título
  });

  it('should update email and password on input change', () => {
    const emailInput: HTMLInputElement = fixture.nativeElement.querySelector('#email');
    const passwordInput: HTMLInputElement = fixture.nativeElement.querySelector('#password');

    emailInput.value = 'test@example.com';
    emailInput.dispatchEvent(new Event('input')); // Simula el evento de entrada

    passwordInput.value = 'testpassword';
    passwordInput.dispatchEvent(new Event('input'));

    fixture.detectChanges(); // Actualiza la vista

    expect(component.email).toBe('test@example.com');
    expect(component.password).toBe('testpassword');
  });

  it('should call onLogin method on form submission', () => {
    spyOn(component, 'onLogin'); // Espía el método onLogin
    const form = fixture.nativeElement.querySelector('form');
    form.dispatchEvent(new Event('submit')); // Simula el envío del formulario
    expect(component.onLogin).toHaveBeenCalled(); // Verifica que onLogin fue llamado
  });

  it('should show error message on invalid login', () => {
    component.email = 'wrong@example.com';
    component.password = 'wrong';
    component.onLogin();
    fixture.detectChanges();
    expect(component.errorMessage).toContain('Email o contraseña incorrectos.');
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.text-red-600')?.textContent).toContain('Email o contraseña incorrectos.');
  });

  it('should not show error message on valid login', () => {
    component.email = 'doctor@saludtotal.com';
    component.password = 'password123';
    component.onLogin();
    fixture.detectChanges();
    expect(component.errorMessage).toBe('');
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.text-red-600')).toBeNull(); // No debe haber mensaje de error
  });
});

