import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxCmpCalculatorComponent } from './ngrx-cmp-calculator.component';

describe('NgrxCmpCalculatorComponent', () => {
  let component: NgrxCmpCalculatorComponent;
  let fixture: ComponentFixture<NgrxCmpCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxCmpCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxCmpCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
