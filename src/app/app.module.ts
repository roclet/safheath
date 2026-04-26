import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { Error404Component } from './component/error404/error404.component';
import { HomeComponent } from './component/home/home.component';
import { PayfastDonationComponent } from './component/home/payfast-donation.component';
import { ReactiveFormsModule } from '@angular/forms';
//import { DataProtectionComponent } from './component/data_protection/data-protection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
//import { PrivacyComponent } from './component/privacy/privacy.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    Error404Component,
    HomeComponent,
    //DataProtectionComponent,
    //PrivacyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // Required for Material animations
    MatExpansionModule,
    PayfastDonationComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
