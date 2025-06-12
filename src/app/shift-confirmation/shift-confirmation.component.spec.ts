import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftConfirmationComponent } from './shift-confirmation.component';

describe('ShiftConfirmationComponent', () => {
  let component: ShiftConfirmationComponent;
  let fixture: ComponentFixture<ShiftConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShiftConfirmationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShiftConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
