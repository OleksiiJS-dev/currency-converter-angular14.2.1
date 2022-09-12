import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyConvertorMainComponent } from './currency-convertor-main.component';

describe('CurrencyConvertorMainComponent', () => {
  let component: CurrencyConvertorMainComponent;
  let fixture: ComponentFixture<CurrencyConvertorMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyConvertorMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyConvertorMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
