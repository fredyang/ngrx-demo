import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxCalculatorComponent } from './ngrx-calculator.component';

describe('NgrxCalculatorComponent', () => {
  let component: NgrxCalculatorComponent;
  let fixture: ComponentFixture<NgrxCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
