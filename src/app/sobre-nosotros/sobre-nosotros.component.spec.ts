import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SobreNosotrosComponent } from './sobre-nosotros.component';

describe('SobreNosotrosComponent', () => {
  let component: SobreNosotrosComponent;
  let fixture: ComponentFixture<SobreNosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreNosotrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreNosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should scroll to element with valid ID', () => {
    const spy = spyOn(document, 'getElementById').and.returnValue({
      scrollIntoView: () => {}
    } as HTMLElement);

    component.scrollTo('mision');
    expect(spy).toHaveBeenCalledWith('mision');
  });
});
