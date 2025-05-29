import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaClinicaComponent } from './pagina-clinica.component';

describe('PaginaClinicaComponent', () => {
  let component: PaginaClinicaComponent;
  let fixture: ComponentFixture<PaginaClinicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaClinicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaClinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
