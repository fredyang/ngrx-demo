import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsCalculatorComponent } from './rxjs-calculator.component';

describe('RxjsCalculatorComponent', () => {
  let component: RxjsCalculatorComponent;
  let fixture: ComponentFixture<RxjsCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
