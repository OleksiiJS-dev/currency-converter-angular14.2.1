import { Injectable } from '@angular/core';
/* Modules Declaration */
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Currency } from 'src/app/currency.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  /* Declaration http */
  constructor(private httpClient: HttpClient) { };
  /* To get the current currency exchange rates based on the base provided for the given 'toCurrency' */
  getCurrency(fromCurrency: string, toCurrency: string): Observable<Currency> {
    return this.httpClient.get<Currency>('https://api.exchangerate.host/convert?from=' + fromCurrency + '&to=' + toCurrency);
  };
};