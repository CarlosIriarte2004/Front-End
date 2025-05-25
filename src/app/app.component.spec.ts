import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'; // Importa para probar rutas
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    // Configura el entorno de pruebas antes de cada prueba
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, // Importa esto para que las pruebas de rutas funcionen
        AppComponent // Importa el componente que estamos probando
      ],
    }).compileComponents(); // Compila los componentes
  });

  it('should create the app', () => {
    // Prueba si el componente se crea correctamente
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy(); // Espera que la aplicación exista
  });

  it(`should have as title 'login-medico-app'`, () => {
    // Prueba si el título de la aplicación es correcto
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('login-medico-app'); // Espera que el título sea 'login-medico-app'
  });

  it('should render router outlet', () => {
    // Prueba si el router-outlet está presente en el HTML
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // Detecta cambios en el componente
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('router-outlet')).toBeTruthy(); // Espera que encuentre la etiqueta router-outlet
  });
});
