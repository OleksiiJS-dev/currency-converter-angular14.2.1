import { Component, OnInit } from '@angular/core';
/* Import config from services */
import { ServiceService } from '../services/config.service';
/* Model for array to use in select */
import { currencies } from 'src/app/currency.model';

@Component({
  selector: 'app-currency-convertor-main',
  templateUrl: './currency-convertor-main.component.html',
  styleUrls: ['./currency-convertor-main.component.css']
})
export class CurrencyConvertorMainComponent implements OnInit {
  /* Html declarations */
  titleValue: string = 'Конвертор Валют';
  currencyValue: number = 1;
  /* ngModule inputs and selects declarations */
  priceFromFormat: number = 1;
  priceToFormat: number = 1;
  currencyToFormat: string = 'UAH';
  currencyFromFormat: string = 'USD';
  rate: number = 1;
  /* Array to use in select */
  currency: currencies[] = [
    { value: 'USD' },
    { value: 'EUR' },
    { value: 'UAH' },
  ];
  /* Service private function declaration */
  constructor(private configService: ServiceService) { };
  /* Getting currency with subscribe method using config.service */
  getCurrency(): void {
    this.configService.getCurrency(this.currencyFromFormat, this.currencyToFormat).subscribe(response => {
      /* Getting a value to use in a template */
      this.currencyValue = response.info.rate,
        /* Getting the value for the script to work */
        this.rate = parseFloat(response.info.rate.toFixed(2)),
        this.priceToFormat = parseFloat((this.priceFromFormat * this.rate).toFixed(2));
      if (
        this.currencyFromFormat === this.currencyToFormat
      ) {
        this.priceFromFormat = this.priceToFormat
      };
    });
  };
  /* EventTarget function From input declaration */
  priceFromEvent(event: Event | any): void {
    this.priceToFormat = parseFloat((event.target.value * this.rate).toFixed(2));
  };
  /* EventTarget function To input declaration */
  priceToEvent(event: Event | any): void {
    this.priceFromFormat = parseFloat((event.target.value / this.rate).toFixed(2));
  };
  /* EventTarget function From select declaration */
  currencyFromEvent(event: Event | any): void {
    this.currencyFromFormat = event.target.value, this.getCurrency();
  };
  /* Event target function To select declaration */
  currencyToEvent(event: Event | any): void {
    this.currencyToFormat = event.target.value, this.getCurrency();
  };
  /* Component initialization */
  ngOnInit(): void {
    this.getCurrency()
  };
};
