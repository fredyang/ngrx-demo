import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxCmpLocalCalculatorComponent } from './ngrx-cmp-local-calculator.component';

describe('NgrxCmpLocalCalculatorComponent', () => {
  let component: NgrxCmpLocalCalculatorComponent;
  let fixture: ComponentFixture<NgrxCmpLocalCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxCmpLocalCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxCmpLocalCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
