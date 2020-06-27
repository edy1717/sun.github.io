import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './@material/material.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { EspComponent } from './components/esp/esp.component';
import { LiquidityComponent } from './components/business/liquidity/liquidity.component';
import { SaleComponent } from './components/business/sale/sale.component';
import { SaleEquipmentComponent } from './components/business/sale-equipment/sale-equipment.component';
import { MemberComponent } from './components/investment/member/member.component';
import { TranferComponent } from './components/investment/tranfer/tranfer.component';
import { SaleEquiComponent } from './components/investment/sale-equi/sale-equi.component';
import { MembershipComponent } from './components/membership/membership.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    EspComponent,
    LiquidityComponent,
    SaleComponent,
    SaleEquipmentComponent,
    MemberComponent,
    TranferComponent,
    SaleEquiComponent,
    MembershipComponent,
    
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
