import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// Components Declarations
import { AppComponent } from './app.component';
import { CurrencyConvertorMainComponent } from './currency-convertor-main/currency-convertor-main.component';
import { TopBarComponent } from './top-bar/top-bar.component';
// Modules Declarations
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyConvertorMainComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Modules Call
    FormsModule, HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
