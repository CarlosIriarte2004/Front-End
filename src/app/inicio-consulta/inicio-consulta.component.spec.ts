import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioConsultaComponent } from './inicio-consulta.component';

describe('InicioConsultaComponent', () => {
  let component: InicioConsultaComponent;
  let fixture: ComponentFixture<InicioConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioConsultaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
