import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/config.service'

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  /* Rate for USD div */
  rate1: number = 1000;
  /* Rate for EUR div */
  rate2: number = 1000;
  /* Significance for the functionality to work */
  baseCurrency: string = 'UAH';
  toCurrencyUSD: string = 'USD'
  toCurrencyEUR: string = 'EUR'
  constructor(private configService: ServiceService) { }
  /* getting the desired value to output to the template */
  getCurrencyUSD(): void {
    this.configService.getCurrency(this.baseCurrency, this.toCurrencyUSD).subscribe(response => {
      this.rate1 = response.info.rate
    });
  };
  /* getting the desired value to output to the template */
  getCurrencyEUR(): void {
    this.configService.getCurrency(this.baseCurrency, this.toCurrencyEUR).subscribe(response => {
      this.rate2 = response.info.rate
    });
  };
/* Component initialization */
  ngOnInit(): void {
    this.getCurrencyUSD(),
      this.getCurrencyEUR();
  };
};
