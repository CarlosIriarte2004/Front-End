import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftRecordComponent } from './shift-record.component';

describe('ShiftRecordComponent', () => {
  let component: ShiftRecordComponent;
  let fixture: ComponentFixture<ShiftRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShiftRecordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShiftRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
